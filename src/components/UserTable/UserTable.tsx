import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useConsumeContext } from "../../context/UserContext";
import { Button, TextField } from "@mui/material";

export default function UserTable() {
  const {
    users,
    handleClickOpen,
    handlePageChange,
    loading,
    handleEditUser,
    handleDeleteUser,
    pageCount,text,handleTextChange
  } = useConsumeContext();
  console.log(pageCount);
  if (loading) return <h1>loading data ...</h1>;

  return (
    <Box>
      <Box sx={{my:'20px' , display : "flex",justifyContent:'space-between',alignItems:"center"}}>
        <Box>
        <TextField label="search" value={text}  onChange={handleTextChange} />
        </Box>
        <Box sx={{ my: "50px" }}>
          <Button variant='outlined' onClick={handleClickOpen}>
            Add new user
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell align='right'>email</TableCell>
              <TableCell align='right'>position</TableCell>
              <TableCell align='right'>gender</TableCell>
              <TableCell align='right'>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length &&
              users.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.email}</TableCell>
                  <TableCell align='right'>{row.postion}</TableCell>
                  <TableCell align='right'>{row.gender}</TableCell>
                  <TableCell align='right'>
                    <Button
                      onClick={() => handleEditUser(row.id)}
                      sx={{ mr: "10px" }}
                    >
                      edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteUser(row.id)}
                      color='error'
                    >
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Box
          sx={{ padding: "15px", display: "flex", justifyContent: "center" }}
        >
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              variant='outlined'
              color='primary'
              showFirstButton
              showLastButton
              onChange={handlePageChange}
            />
          </Stack>
        </Box>
      </TableContainer>
    </Box>
  );
}
