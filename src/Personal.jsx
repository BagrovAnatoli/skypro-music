import { useState } from 'react';

function Personal(props) {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 5000);

    if(!isLoading) {
        return (
            <div className="sidebar__personal">
                <p className="sidebar__personal-name">
                    {props.name}
                </p>
                <div className="sidebar__avatar" />
            </div>
        );
    }
}

export default Personal;