import React, { Component } from "react";
import { Button } from 'antd';
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Daftar</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Button type="primary" className="tombol-daftar">Daftar</Button>
            </form>
        );
    }
}