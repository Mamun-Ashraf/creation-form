import React from 'react';

const BloodGroups = () => {

    const groups = ["A positive (A+)", "A negative (A-)", "B positive (B+)", "B negative (B-)", "AB positive (AB+)", "AB negative (AB-)", "O positive (O+)", "O negative (O-)"]

    return (
        <div>
            <select className="form-select" aria-label="Default select example">
                {
                    groups.map((group, index) => <option
                        key={index}
                        value={group}
                    >
                        {group}
                    </option>)
                }
            </select>
        </div>
    );
};

export default BloodGroups;