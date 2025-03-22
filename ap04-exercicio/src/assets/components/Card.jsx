const Card = (props) => {
    const { cabecalho, data, autor, avatar, children } = props;
    
    return (
        <div className="card mb-3">
            <div className="card-header d-flex">
                {avatar && <img src={avatar} alt={autor} className="avatar me-2" width="50" height="50" />}
                <div>
                    <h5 className="mb-0">{autor}</h5>
                    <small className="text-muted">{data}</small>
                </div>
            </div>
            <div className="card-body">
                {children}
            </div>
            {props.acoes && (
                <div className="card-footer text-end">
                    {props.acoes}
                </div>
            )}
        </div>
    );
};

export default Card;