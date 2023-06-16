import React from 'react';

const SessionDropdown = () => {
    const currentYear = new Date().getFullYear() - 10;
    const sessionRange = 30; // Number of years to include in the dropdown

    const options = [];
    for (let i = 0; i < sessionRange; i++) {
        const startYear = currentYear + i;
        const endYear = currentYear + i + 1;
        const session = `${startYear}-${endYear}`;
        options.push(<option key={session} value={session}>{session}</option>);
    }

    return (
        <select className="form-select w-25" aria-label="Default select example">
            {options}
        </select>
    );
};

export default SessionDropdown;
