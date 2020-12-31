import React from 'react';

type titleProps = {
    titleText: string[];
    classNames: string;
};

const Title = ({ titleText, classNames } : titleProps ) => {
    return (
        <React.Fragment>
            <div className={classNames}>{titleText}</div>
        </React.Fragment>
    );
}

export default Title;
