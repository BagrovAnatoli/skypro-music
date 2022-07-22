function Personal(props) {
    return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">
                {props.name}
            </p>
            <div className="sidebar__avatar" />
        </div>
    );
}

export default Personal;