import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/home.scss";

export const CreateProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<form>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>Email</label>
						<input type="email" className="form-control" id="inputEmail4" />
					</div>
					<div className="form-group col-md-6">
						<label>Password</label>
						<input type="password" className="form-control" id="inputPassword4" />
					</div>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
				</div>
				<div className="form-group">
					<label>Address 2</label>
					<input
						type="text"
						className="form-control"
						id="inputAddress2"
						placeholder="Apartment, studio, or floor"
					/>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>City</label>
						<input type="text" className="form-control" id="inputCity" />
					</div>
					<div className="form-group col-md-4">
						<label>State</label>
						<select id="inputState" className="form-control">
							<option selected>Choose...</option>
							<option>...</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label>Zip</label>
						<input type="text" className="form-control" id="inputZip" />
					</div>
				</div>
				<div className="form-group">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="gridCheck" />
						<label className="form-check-label">Check me out</label>
					</div>
				</div>
				<button type="submit" className="btn btn-primary">
					Sign in
				</button>
			</form>
		</div>
	);
};
