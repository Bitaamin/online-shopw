
export default function Admin() {

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Admin Login</h2>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input className="form-controll" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-controll" />
                            </div>
                            <div className="btn btn-primary mb-3">Login</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};