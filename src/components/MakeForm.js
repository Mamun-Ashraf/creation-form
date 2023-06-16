import React from 'react';
import SelectLocation from './SelectLocation/SelectLocation';
import SessionDropdown from './SessionDropdown';
import BloodGroups from './BloodGroups';
import ImageUploader from './ImageUploader';
import StudentType from './StudentType';

const FormCreation = () => {

    return (
        <div>
            <header className="text-center my-5 text-success">
                <h1>Exploring Form with validation</h1>
            </header>

            <main className="container">
                <section>


                    <form className="my-5">

                        <div>
                            <StudentType></StudentType>
                        </div>

                        <div className="d-flex mb-3">
                            <p className="me-5 fw-semibold">শিক্ষাবর্ষ:</p>
                            <SessionDropdown></SessionDropdown>
                        </div>
                        <div className="d-flex mb-3">
                            <p className="me-5 fw-semibold">জামাত:</p>
                            <select className="form-select w-25" aria-label="Default select example">
                                <option defaultValue="selected">জামাত নির্বাচন করুন</option>
                                <option value="1">প্রথম জামাত</option>
                                <option value="2">দ্বিতীয় জামাত</option>
                                <option value="3">তৃতীয় জামাত</option>
                            </select>
                        </div>
                        <div className="d-flex mb-3">
                            <p className="me-5 fw-semibold">গ্রুপ/শাখা:</p>
                            <select className="form-select w-25" aria-label="Default select example">
                                <option defaultValue="selected">গ্রুপ নির্বাচন করুন</option>
                                <option value="1">ক গ্রুপ</option>
                                <option value="2">খ গ্রুপ</option>
                                <option value="3">গ গ্রুপ</option>
                            </select>
                        </div>

                        <SelectLocation></SelectLocation>

                        <div className="d-flex mb-3">
                            <p className="me-5 fw-semibold">রক্তের গ্রুপ:</p>
                            <BloodGroups></BloodGroups>
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">ছাত্রের ধরন: :</p>
                            <input className="form-control w-25" type="text" name="studentsNameBangla" id=""
                                placeholder="ছাত্রের ধরন" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">ছাত্রের নাম(বাংলায়) :</p>
                            <input className="form-control w-25 w-25" type="text" name="studentsNameBangla" id=""
                                placeholder="ছাত্রের নাম(বাংলায়)" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">ছাত্রের নাম(আরবীতে) :</p>
                            <input className="form-control w-25 w-25" type="text" name="studentsNameArabic" id=""
                                placeholder="ছাত্রের নাম(আরবীতে)" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">পিতার নাম(বাংলায়) :</p>
                            <input className="form-control w-25 w-25" type="text" name="fathersNameBangla" id=""
                                placeholder="পিতার নাম(বাংলায়)" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">পিতার নাম(আরবীতে) :</p>
                            <input className="form-control w-25 w-25" type="text" name="fathersNameArabic" id=""
                                placeholder="পিতার নাম(আরবীতে)" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">মাতার নাম :</p>
                            <input className="form-control w-25 w-25" type="text" name="mothersName" id="" placeholder="মাতার নাম" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">অভিভাবক :</p>
                            <input className="form-control w-25 w-25" type="text" name="gurdian" id="" placeholder="অভিভাবক" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">সম্পর্ক :</p>
                            <input className="form-control w-25 w-25" type="text" name="relation" id="" placeholder="সম্পর্ক" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">জন্ম তারিখ :</p>
                            <input className="form-control w-25 w-25" type="date" name="relation" id="" placeholder="জন্ম তারিখ" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">ডাকঘর :</p>
                            <input className="form-control w-25 w-25" type="text" name="postOffice" id="" placeholder="ডাকঘর" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">গ্রাম :</p>
                            <input className="form-control w-25 w-25" type="text" name="village" id="" placeholder="গ্রাম" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">পুরাতন দাখেলা :</p>
                            <input className="form-control w-25 w-25" type="text" name="oldDakhela" id=""
                                placeholder="পুরাতন দাখেলা" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">মোবাইল নাম্বার :</p>
                            <input className="form-control w-25" type="number" name="mobileNumber" id=""
                                placeholder="মোবাইল নাম্বার" />
                        </div>
                        <div className="d-flex mb-3">
                            <p className="fw-semibold me-5">জাতীয় পরিচয়পত্র নাম্বার:</p>
                            <input className="form-control w-25" type="number" name="nidNo" id=""
                                placeholder="জাতীয় পরিচয়পত্র নাম্বার" />
                        </div>
                        <div>
                            <p className="fs-5">আবাসিক যোগ্য:
                                <label className="mx-5 fs-6" htmlFor="resident"><input type="radio" name="residenceStatus"
                                    id="resident" /> আবাসিক</label>
                                <label className="fs-6" htmlFor="nonResident"><input type="radio" name="residenceStatus"
                                    id="nonResident" /> অনাবাসিক</label>
                            </p>
                        </div>
                        <div>
                            <p className="fs-5">যাকাত-ফেতরা গ্রহনের যোগ্য:
                                <label className="mx-5 fs-6" htmlFor="yes"><input type="radio" name="jakat" id="yes" /> হ্যাঁ</label>
                                <label className="fs-6" htmlFor="no"><input type="radio" name="jakat" id="no" /> না</label>
                            </p>
                        </div>
                        <div className="mb-3 d-flex">
                            <label htmlFor="special-note" className="form-label me-5">বিশেষ নোট :</label>
                            <textarea className="form-control w-25" id="special-note" rows="5"></textarea>
                        </div>
                        <div className="mb-3 d-flex">
                            <label htmlFor="formFile" className="form-label me-5">ছাত্রের ছবি :</label>
                            <ImageUploader></ImageUploader>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default FormCreation;