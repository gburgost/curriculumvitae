import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
    <div className="Certificates">
        <H2Styled name="Certificates" />
        <div className="Certificates-container">
            {props.data.map((cer, index) => (
                <div className="Certificates-item" key={`Cer-${index}`}>
                    <H3Styled>{cer.name} - {cer.institution}</H3Styled>
                    <PStyled>{cer.description} 
                    <span>{cer.date}</span></PStyled>
                </div>
            ))}
        </div>
    </div>
);
export default Certificates;