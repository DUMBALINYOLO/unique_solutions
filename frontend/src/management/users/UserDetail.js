import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';




const SingleAccountDetail = (props) => {
    const {
        id,
        email,
        username,
        first_name,
        middle_name,
        last_name,
        gender,


    } = props.data;


    return (
        <Paper className='card-box-hover-rise'>
      <div className="flexgrid-demo">
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="ID">
                            <p>
                                {id}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="EMAIL">
                            <p>
                                {email}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="USERNAME">
                            <p>
                                  {username}
                            </p>
                        </Panel>
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="FIRST NAME">
                            <p>
                                {first_name}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="MIDDLE NAME">
                            <p>
                                {middle_name}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="LAST NAME">
                            <p>
                                {last_name}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">


                    <div className="p-col">
                        <Panel header="GENDER">
                            <p>
                                {gender}
                            </p>
                        </Panel>
                    </div>
                </div>
            </div>
        </Paper>
    );
}


export default SingleAccountDetail;
