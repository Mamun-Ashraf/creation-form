import React, { useState } from 'react';

const StudentType = () => {

    const [studentType, setStudentType] = useState('');
    const handleStudentType = event => {
        const type = event.target.value;
        setStudentType(type);
    }

    return (
        <div>
            <p className="fs-5 fw-bold">ছাত্রের ধরন:
                <label className="mx-5 fs-6 fw-normal" htmlFor="studentTypeNew"><input type="radio" name="studentType"
                    id="studentTypeNew" value="নতুন" checked={studentType === "নতুন"} onChange={handleStudentType} /> নতুন</label>
                <label className="fs-6 fw-normal" htmlFor="studentTypeOld"><input type="radio" name="studentType"
                    id="studentTypeOld" value="পুরাতন" checked={studentType === "পুরাতন"} onChange={handleStudentType} /> পুরাতন</label>
            </p>

            <div className="d-flex mb-3">
                <p className="fw-semibold me-5">ছাত্রের ধরন :</p>
                <p>{studentType}</p>
            </div>
        </div>
    );
};

export default StudentType;