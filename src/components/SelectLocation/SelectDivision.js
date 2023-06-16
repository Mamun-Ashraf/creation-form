import React, { useEffect, useState } from "react";

function SelectDivision() {
    const [country, setCountry] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazila, setSelectedUpazila] = useState("");

    useEffect(() => {
        fetch('infoBangladesh.json')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    // Helper function to handle division selection
    const handleDivisionChange = (event) => {
        const division = event.target.value;
        setSelectedDivision(division);
        setSelectedDistrict("");
        setSelectedUpazila("");
    };

    // Helper function to handle district selection
    const handleDistrictChange = (event) => {
        const district = event.target.value;
        setSelectedDistrict(district);
        setSelectedUpazila("");
    };

    // Helper function to handle upazila selection
    const handleUpazilaChange = (event) => {
        const upazila = event.target.value;
        setSelectedUpazila(upazila);
    };

    return (
        <div>
            <div className="d-flex mb-3">
                <label htmlFor="division" className="me-5 fw-semibold">বিভাগ:</label>
                <select id="division" value={selectedDivision} onChange={handleDivisionChange} className="form-select w-25" aria-label="Default select example">
                    <option defaultValue="selected">বিভাগ নির্বাচন করুন</option>
                    {country.map((divisions) => (
                        <option key={divisions.division} value={divisions.division}>
                            {divisions.division}
                        </option>
                    ))}
                </select>
            </div>

            <div className="d-flex mb-3">
                <label htmlFor="district" className="me-5 fw-semibold">জেলা:</label>
                <select id="district" value={selectedDistrict} onChange={handleDistrictChange} className="form-select w-25" aria-label="Default select example">
                    <option defaultValue="selected">জেলা নির্বাচন করুন</option>
                    {selectedDivision &&
                        country
                            .find(divisions => divisions.division === selectedDivision)
                            .districts.map(district => (
                                <option key={district.district} value={district.district}>
                                    {district.district}
                                </option>
                            ))}
                </select>
            </div>

            <div className="d-flex mb-3">
                <label htmlFor="upazila" className="me-5 fw-semibold">উপজেলা:</label>
                <select id="upazila" value={selectedUpazila} onChange={handleUpazilaChange} className="form-select w-25" aria-label="Default select example">
                    <option defaultValue="selected">উপজেলা নির্বাচন করুন</option>
                    {selectedDistrict &&
                        country
                            .find(divisions => divisions.division === selectedDivision)
                            .districts.find(district => district.district === selectedDistrict)
                            .upazilas.map(upazila => (
                                <option key={upazila} value={upazila}>
                                    {upazila}
                                </option>
                            ))}
                </select>
            </div>
        </div>
    );
}

export default SelectDivision;
