import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";
import "./addNewUser.scss"; // Import external SCSS

const AddNewUser = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateJoined: "", // Simulating MongoDB createdAt
    role: "user",
    bookBorrowed: "",
    universityId: "",
    universityIdCard: "",
    adminId: "",
    adminIdCard: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const endpoint = formData.role === "admin" ? "/api/admins" : "/api/users";
      const payload =
        formData.role === "admin"
          ? {
              name: formData.name,
              email: formData.email,
              dateJoined: formData.dateJoined,
              role: formData.role,
              bookBorrowed: formData.bookBorrowed,
              adminId: formData.adminId,
              adminIdCard: formData.adminIdCard,
            }
          : {
              name: formData.name,
              email: formData.email,
              dateJoined: formData.dateJoined,
              role: formData.role,
              universityId: formData.universityId,
              universityIdCard: formData.universityIdCard,
            };

      // Simulating an API call
      console.log("Sending Data to:", endpoint);
      console.log("Payload:", payload);

      // Reset and Close
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          setOpen(false);
        }
      }}
      disableEscapeKeyDown
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle className="dialog-title">Add New User</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {/* Common Fields */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Joined"
              name="dateJoined"
              value={formData.dateJoined}
              InputProps={{ readOnly: true }}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="text-field"
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </TextField>
          </Grid>
          {formData.role === "user" && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Book Borrowed"
                name="bookBorrowed"
                value={formData.bookBorrowed}
                onChange={handleChange}
                className="text-field"
              />
            </Grid>
          )}

          {/* User Role Fields */}
          {formData.role === "user" && (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="University ID"
                  name="universityId"
                  value={formData.universityId}
                  onChange={handleChange}
                  className="text-field"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="University ID Card"
                  name="universityIdCard"
                  value={formData.universityIdCard}
                  onChange={handleChange}
                  className="text-field"
                />
              </Grid>
            </>
          )}

          {/* Admin Role Fields */}
          {formData.role === "admin" && (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Admin ID"
                  name="adminId"
                  value={formData.adminId}
                  onChange={handleChange}
                  className="text-field"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Admin ID Card"
                  name="adminIdCard"
                  value={formData.adminIdCard}
                  onChange={handleChange}
                  className="text-field"
                />
              </Grid>
            </>
          )}
        </Grid>
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button className="cancel-btn" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          className="save-btn"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewUser;
