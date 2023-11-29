import React from 'react'

function University() {
    return (
        <section className="table-components">
            <div className="container-fluid">
                <div className="title-wrapper pt-30">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="title">
                                <h2>Tables</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="breadcrumb-wrapper">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#0">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Tables
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tables-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-style mb-30">
                                <h6 className="mb-10">Data Table</h6>
                                <p className="text-sm mb-20">
                                    For basic styling—light padding and only horizontal
                                    dividers—use the class table.
                                </p>
                                <div className="table-wrapper table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <h6>#</h6>
                                                </th>
                                                <th>
                                                    <h6>Name</h6>
                                                </th>
                                                <th>
                                                    <h6>Email</h6>
                                                </th>
                                                <th>
                                                    <h6>Project</h6>
                                                </th>
                                                <th>
                                                    <h6>Status</h6>
                                                </th>
                                                <th>
                                                    <h6>Action</h6>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="employee-image">
                                                        <img src="assets/images/lead/lead-1.png" alt="" />
                                                    </div>
                                                </td>
                                                <td className="min-width">
                                                    <p>Esther Howard</p>
                                                </td>
                                                <td className="min-width">
                                                    <p><a href="#0">yourmail@gmail.com</a></p>
                                                </td>
                                                <td className="min-width">
                                                    <p>Admin Dashboard Design</p>
                                                </td>
                                                <td className="min-width">
                                                    <span className="status-btn active-btn">Active</span>
                                                </td>
                                                <td>
                                                    <div className="action">
                                                        <button className="text-danger">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="employee-image">
                                                        <img src="assets/images/lead/lead-2.png" alt="" />
                                                    </div>
                                                </td>
                                                <td className="min-width">
                                                    <p>D. Jonathon</p>
                                                </td>
                                                <td className="min-width">
                                                    <p><a href="#0">yourmail@gmail.com</a></p>
                                                </td>
                                                <td className="min-width">
                                                    <p>React Dashboard</p>
                                                </td>
                                                <td className="min-width">
                                                    <span className="status-btn active-btn">Active</span>
                                                </td>
                                                <td>
                                                    <div className="action">
                                                        <button className="text-danger">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="employee-image">
                                                        <img src="assets/images/lead/lead-3.png" alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>John Doe</p>
                                                </td>
                                                <td>
                                                    <p><a href="#0">yourmail@gmail.com</a></p>
                                                </td>
                                                <td>
                                                    <p>Bootstrap Template</p>
                                                </td>
                                                <td>
                                                    <span className="status-btn success-btn">Done</span>
                                                </td>
                                                <td>
                                                    <div className="action">
                                                        <button className="text-danger">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="employee-image">
                                                        <img src="assets/images/lead/lead-4.png" alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>Rayhan Jamil</p>
                                                </td>
                                                <td>
                                                    <p><a href="#0">yourmail@gmail.com</a></p>
                                                </td>
                                                <td>
                                                    <p>Css Grid Template</p>
                                                </td>
                                                <td>
                                                    <span className="status-btn info-btn">Pending</span>
                                                </td>
                                                <td>
                                                    <div className="action">
                                                        <button className="text-danger">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="employee-image">
                                                        <img src="assets/images/lead/lead-5.png" alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>Esther Howard</p>
                                                </td>
                                                <td>
                                                    <p><a href="#0">yourmail@gmail.com</a></p>
                                                </td>
                                                <td>
                                                    <p>Admin Dashboard Design</p>
                                                </td>
                                                <td>
                                                    <span className="status-btn close-btn">Close</span>
                                                </td>
                                                <td>
                                                    <div className="action">
                                                        <button className="text-danger">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="employee-image">
                                                        <img src="assets/images/lead/lead-6.png" alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>Anee Doe</p>
                                                </td>
                                                <td>
                                                    <p><a href="#0">yourmail@gmail.com</a></p>
                                                </td>
                                                <td>
                                                    <p>Space Template Update</p>
                                                </td>
                                                <td>
                                                    <span className="status-btn active-btn">Active</span>
                                                </td>
                                                <td>
                                                    <div className="action">
                                                        <button className="text-danger">
                                                            <i className="lni lni-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default University