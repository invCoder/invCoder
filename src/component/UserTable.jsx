import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Table, TableCell, TableHead, TableRow, Typography, TableBody, styled, Button } from '@mui/material';

// Styled component for the container
const Container = styled(Box)`
    width: 80%;
    margin: 50px auto;
    & > h4 {
        margin-bottom: 20px;
    }
    & > div > table > thead {
        background-color: rgb(97, 113, 201);
    }
    & > div > table > thead > tr > th {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 600;
    }
    & > div > table > tbody > tr > td {
        font-size: 16px;
    }
`;

const UserTable = () => {
    // State to store the list of users
    const [userList, setUserList] = useState([]);

    // Function to delete a user by ID
    const handleDeleteUser = (userId) => {
        const updatedUserList = userList.filter(user => user.id !== userId);
        setUserList(updatedUserList);
    };

    // API URL to fetch user data
    const API_URL = 'https://o5e8gb5fah.execute-api.us-east-1.amazonaws.com/dev';

    // Fetch user data from the API
    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const response = await axios.get(API_URL);
                // Assuming the response.data.body is a stringified JSON
                const fetchedUserList = JSON.parse(response.data.body); // Parse the JSON string
                setUserList(fetchedUserList); // Update the state with the fetched data
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserList();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    // Log the userList state whenever it changes
    useEffect(() => {
        console.log(userList, 'userList state updated');
    }, [userList]);

    return (
        <Container>
            <Typography variant='h4'>User Details</Typography>
            <Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Salary</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.Name}</TableCell>
                                <TableCell>{user.Email}</TableCell>
                                <TableCell>{user.Phone}</TableCell>
                                <TableCell>{user.Age}</TableCell>
                                <TableCell>{user.Salary}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleDeleteUser(user.id)}
                                    >
                                        Remove
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Container>
    );
};

export default UserTable;