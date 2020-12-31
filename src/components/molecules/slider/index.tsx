import React from 'react';
import Title from '../../atoms/title';

type myProps = {
    images : string[];
    headings: string;
}

class Slider extends React.Component<myProps> {

    renderedList = () => {
        return this.props.images.map((image, index) => {
              return <img key={index} src={image} alt="img"/>;
        });
    }

    render () {
        return (
            <React.Fragment>
                <Title  titleText={this.props.headings} classNames="header-text" />
                <div className="site">
                    { this.renderedList() }
                </div>
            </React.Fragment>
        );
    }
}

export default Slider;
