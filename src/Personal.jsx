import { useState, useEffect } from 'react';

function Personal(props) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    },[]);

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