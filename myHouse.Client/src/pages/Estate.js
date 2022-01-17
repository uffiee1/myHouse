import React, { Component } from 'react';

import { variables } from '../actions/ApiUrls';

export class Estate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            estates: [],
            modalTitle: "",
            Id: 0,
            Description: "",
            Price: "",
            City: "",
            Street: "",
            Type: "",
            isVisible: true,
            Pictures: "NoHomePicture.png",
            PicturePath: variables.GetPictureUrl
        }
    }

    refreshList() {
        fetch(variables.GetAllEstatesUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ estates: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    changeDescription = (e) => {
        this.setState({ Description: e.target.value });
    }

    changePrice = (e) => {
        this.setState({ Price: e.target.value });
    }

    changeCity = (e) => {
        this.setState({ City: e.target.value });
    }

    changeStreet = (e) => {
        this.setState({ Street: e.target.value });
    }

    changeType = (e) => {
        this.setState({ Type: e.target.value });
    }

    changeisVisible = (e) => {
        this.setState({ isVisible: e.target.value });
    }

    addClick() {
        this.setState({
            modalTitle: "Add Estate",
            Id: 0,
            Description: "",
            Price: "",
            City: "",
            Street: "",
            Type: "",
            isVisible: true,
            Pictures: "NoHomePicture.png"
        });
    }
    editClick(est) {
        this.setState({
            modalTitle: "Edit Estate",
            Id: est.Id,
            Description: est.Description,
            Price: est.Price,
            City: est.City,
            Street: est.Street,
            Type: est.Type,
            isVisible: est.isVisible,
            Pictures: est.Pictures
        });
    }

    createClick() {
        fetch(variables.GetAllEstatesUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Description: this.state.Description,
                Price: this.state.Price,
                City: this.state.City,
                Street: this.state.Street,
                Type: this.state.Type,
                isVisible: this.state.isVisible,
                Pictures: this.state.Pictures
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }


    updateClick() {
        fetch(variables.GetAllEstatesUrl, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: this.state.Id,
                Description: this.state.Description,
                Price: this.state.Price,
                City: this.state.City,
                Street: this.state.Street,
                Type: this.state.Type,
                isVisible: this.state.isVisible,
                Pictures: this.state.Pictures
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }

    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.GetAllEstatesUrl + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert('Failed');
                })
        }
    }

    imageUpload = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", e.target.files[0], e.target.files[0].name);

        fetch(variables.BaseUrl + 'estate/savepicture', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ Picture: data });
            })
    }

    render() {
        const {
            estates,
            modalTitle,
            Id,
            Description,
            Price,
            City,
            Street,
            Type,
            isVisible,
            PicturePath,
            Pictures,
        } = this.state;

        return (
            <div>

                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add Estate
                </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Picture
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                City
                            </th>
                            <th>
                                Street
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                Visible
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {estates.map(est =>
                            <tr key={est.Id}>
                                <td>{est.Id}</td>
                                <td>{est.Description}</td>
                                <td>{est.Price}</td>
                                <td>{est.City}</td>
                                <td>{est.Street}</td>
                                <td>{est.Type}</td>
                                <td>{est.Visible}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.editClick(est)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>

                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        onClick={() => this.deleteClick(est.Id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>

                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 w-50 bd-highlight">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Description</span>
                                            <input type="text" className="form-control"
                                                value={Description}
                                                onChange={this.changeDescription} />
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-prepend">Price (€)</span>
                                            <input type="text" className="form-control"
                                                value={Price}
                                                onChange={this.changePrice} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">.00</span>
                                            </div>
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">City</span>
                                            <input type="text" className="form-control"
                                                value={City}
                                                onChange={this.changeCity} />
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Street</span>
                                            <input type="text" className="form-control"
                                                value={Street}
                                                onChange={this.changeStreet} />
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Type</span>
                                            <input type="text" className="form-control"
                                                value={Type}
                                                onChange={this.changeType} />
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-prepend">Visible</span>
                                            <input type="checkbox" className="form-control"
                                                value={isVisible}
                                                onChange={this.changeisVisible} />
                                        </div>

                                    </div>
                                    <div className="p-2 w-50 bd-highlight">
                                        <img width="250px" height="250px"
                                            src={PicturePath + Pictures} alt='' />
                                        <input className="m-2" type="file" onChange={this.imageUpload} />
                                    </div>
                                </div>

                                {Id === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}
                                    >Create</button>
                                    : null}

                                {Id !== 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.updateClick()}
                                    >Update</button>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Estate;