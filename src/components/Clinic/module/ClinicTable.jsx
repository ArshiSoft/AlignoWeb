import React from "react";
import DataTable from "react-data-table-component";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputNumber, message, Modal, Popconfirm, Space } from "antd";
import { tr } from "date-fns/locale";

const ClinicTable = () => {
  // const api = 'http://localhost:1337/api/clinicform/';
//   const api = 'https://server.aligno.co/api/clinicform/';
  const history = useNavigate();

  const [Clinic, setClinicList] = useState([]);
  const [Patient, setPatient] = useState([]);
  const [totalAligners, setTotalAligners] = useState(0);
  const [approveLoading, setApproveLoading] = useState(false);
  const [isPlanningModalOpen, setIsPlanningModalOpen] = useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      getClinic();
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    getClinic();
  }, []);

  const getClinic = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/clinicform/");
      setClinicList(response.data.userdata);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick =  async ()=> {
const response = await fetch('/api/clinicform/:id',{
	method : 'DELETE'
})
const json = await response.json()
  }

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
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
	{
		name: '',
		button: true,
		cell: (row) => (
			<button
				className='btn btn-outline btn-sm btn-primary'
				// onClick={(e) => btnViewClick(e, row)}
				>
				Edit
			</button>
		),
	},
	{
		name: '',
		button: true,
		cell: (row) => (
			<button
				className='btn btn-outline btn-sm btn-danger'
				onClick={() => handleClick()}
				>
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
		  actions={<button className="btn btn-sm btn-info">New Clinic</button>}
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
        {/* <Modal
					title={'Set Aligners Plan for ' + Patient.patientname}
					okText='Approve'
					open={isPlanningModalOpen}
					confirmLoading={approveLoading}
					onOk={btnPlanningModalApproveClick}
					onCancel={btnPlanningModalCancelClick}>
					<Space>
						<label className='form-label'>
							Total Aligners: <span className='required'>*</span>
						</label>
						<InputNumber
							onChange={(value) => setTotalAligners(value)}
							value={totalAligners}
							min={1}
							max={30}
						/>
					</Space>
				</Modal> */}
      </div>
    </>
  );
};

export default ClinicTable;
