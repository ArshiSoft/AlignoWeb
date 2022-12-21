import React from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, InputNumber, message, Modal, Popconfirm, Space } from "antd";
import { tr } from "date-fns/locale";


const ClinicTable = () => {
  // const api = "http://localhost:1337/api/clinicform/";
    const api = 'https://server.aligno.co/api/clinicform/';
  const history = useNavigate();
  const navigate = useNavigate();
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [Clinic, setClinicList] = useState([]);
  const [clinic, setClinic] = useState([]);
  const [approveLoading, setApproveLoading] = useState(false);
  const [isClinicModalOpen, setIsClinicModalOpen] = useState(false);
  const [popUpButton, setPopUpButton] = useState("Create");
  const [popUpTitle, setPopUpTitle] = useState("New Clinic");
  const [clinicName, setClinicName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      getClinic();
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    getClinic();
  }, []);

  const showClinicModal = () => {
    setIsClinicModalOpen(true);
  };

  const btnClinicModalCancelClick = () => {
    setIsClinicModalOpen(false);
  };
  const btnClinicModalOkClick = (e) => {
    e.preventDefault();
    setApproveLoading(true);

    return setTimeout(() => {
      if (popUpButton === "Create")
        addNewClinic(`Clinic: ${clinicName} successfully added!`);
      else {
        clinic.clinicName = clinicName;
        clinic.address = address;
        clinic.country = country;
        clinic.city = city;
        updateClinic(
          clinic,
          `Clinic: ${clinic.clinicName} successfully updated!`
        );
      }
      setApproveLoading(false);
      setIsClinicModalOpen(false);
    }, 1000);
  };

  async function addNewClinic(successMessage) {
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clinicName,
          address,
          country,
          city,
        }),
      });
      if (response.status) {
        getClinic();
        message.success(successMessage);
      } else {
        message.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      message.error("An error occured. Retry!");
    }
  }

  const updateClinic = async (clinic, successMessage) => {
    try {
      const response = await axios.put(api + clinic._id, clinic);
      if (response.status) {
        getClinic();
        message.success(successMessage);
      } else {
        message.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      message.error("An error occured. Retry!");
    }
  };

  const deleteClinic = async (row, successMessage) => {
    console.log(row);
    try {
      const response = await fetch(api, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(row),
      });
      if (response.status) {
        getClinic();
        message.success(successMessage);
      } else {
        message.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      message.error("An error occured. Retry!");
    }
  };

  const getClinic = async () => {
    try {
      const response = await axios.get(api);
      setClinicList(response.data.userdata);
    } catch (error) {
      console.log(error);
    }
  };
  const btnEditClick = (e, row) => {
    e.preventDefault();
    setClinic(row);

    setClinicName(row.clinicName);
    setAddress(row.address);
    setCountry(row.country);
    setCity(row.city);

    setPopUpButton("Update");
    setPopUpTitle("Update Clinic: " + row.clinicName);

    showClinicModal();
  };
  const btnDeleteClick = (e, row) => {
    e.preventDefault();

    Modal.confirm({
      title: `Are you sure to delete Clinic: ${row.clinicName}?`,
      onOk: (e) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            deleteClinic(
              row,
              `Clinic: ${row.clinicName} deleted successfully!`
            );

            resolve();
          }, 1000);
        }).catch(() => message.error("Something went wrong!"));
      },
    });
  };
  const btnCreateNewClinicClick = (e) => {
    e.preventDefault();

    setClinicName("");
    setAddress("");
    setCountry("");
    setCity("");

    setPopUpButton("Create");
    setPopUpTitle("New Clinic");

    showClinicModal();
  };
  //   const handleClick =  async ()=> {
  // const response = await fetch('/api/clinicform/:id',{
  // 	method : 'DELETE'
  // })
  // const json = await response.json()
  //   }

  const columns = [
    // {
    //   name: "Date",
    //   omit: false,
    //   selector: (Clinic) => Clinic.CreatedDate,
    //   sortable: true,
    // },
    {
      name: "Clinic Name",
      selector: (row) => row.clinicName,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "",
      button: true,
      cell: (row) => (
        <button
          className="btn btn-outline btn-sm btn-primary"
          onClick={(e) => btnEditClick(e, row)}>
          {/* {getActionButtonText(Clinic)} */}
          Edit
        </button>
      ),
    },
    {
      name: "",
      button: true,
      cell: (row) => (
        <button
          className="btn btn-outline btn-sm btn-danger"
          onClick={(e) => btnDeleteClick(e, row)}>
          Delete
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="modalcontent">
        <DataTable
          title="Clinic"
          columns={columns}
          data={Clinic}
          pointerOnHover={true}
          highlightOnHover={true}
          expendableRows={true}
          progressPending={false}
          actions={
            <button
              onClick={(e) => btnCreateNewClinicClick(e)}
              className="btn btn-sm btn-info">
              New Clinic
            </button>
          }
          // subHeader
          // subHeaderComponent={
          // 	<input
          // 		type='text'
          // 		placeholder='search here'
          // 		className='w-25 form-control'
          // 		value={search}
          // 		onChange={(e) => setSearch(e.target.value)}></input>
          // }
          // subHeaderAlign='left'
        />
        <Modal
          // width={1000}
          style={{textAlign:`center`}}
          title={popUpTitle}
          okText={popUpButton}
          open={isClinicModalOpen}
          confirmLoading={approveLoading}
          onOk={btnClinicModalOkClick}
          centered
          
          onCancel={btnClinicModalCancelClick}>
          
          <Space>
            {/* <label className="form-label">
              Clinic Name: <span className="required">*</span>
            </label> */}
            <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
            <Form.Item
          name="title"
          label="Clinic Name"
          rules={[
            {
              required: true,
              message: 'Please input the Clinic Name!',
            },
          ]}
        >

            <Input
            style={{width:`400px`}}
              placeholder="Clinic Name"
              onChange={(e) => setClinicName(e.target.value)}
              value={clinicName}
            />
            </Form.Item>
            <Form.Item
          name="Address"
          label="Address"
          rules={[
            {
              required: true,
              message: 'Please input the Address!',
            },
          ]}
        >
          <TextArea 
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          placeholder="Address" 
          autoSize
          />
    
            
            </Form.Item>
            <Form.Item
          name="City"
          label="City"
          rules={[
            {
              required: true,
              message: 'Please input the City!',
            },
          ]}
        >
            <Input
           
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            </Form.Item>
            <Form.Item
          name="Country"
          label="Country"
          rules={[
            {
              required: true,
              message: 'Please input the Country!',
            },
          ]}
        >
            <Input
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            </Form.Item>
            
            </Form>
          </Space>
        </Modal>
      </div>
    </>
  );
};

export default ClinicTable;
