import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Table, Tag } from "antd";
import "./styles.css";

const columns = [
  {
    title: "Plant ID",
    dataIndex: "plant_id",
    key: "plant_id"
  },
  {
    title: "Temperature",
    dataIndex: "temperature",
    key: "temperature"
  },
  {
    title: "Wetness",
    dataIndex: "wetness",
    key: "wetness"
  },
  {
    title: "Status",
    render: dataKey => (
      <Tag
        color={
          dataKey.wetness < 1500 || dataKey.wetness > 5000 ? "red" : "green"
        }
        key={dataKey._id}
      >
        CONTROL
      </Tag>
    )
  }
];

const Tabl = props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      // eslint-disable-next-line
      const res = await axios({
        method: "get",
        url: "http://localhost:4200/get",
        headers: {
          Authorization: props.token
        }
      }).then(res => setData(res.data));
    };
    const interval = setInterval(() => {
      fetch();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  if (data === null) {
    return (
      <div className="Loader">
        <div className="LoaderBalls">
          <div className="LoaderBalls__item"></div>
          <div className="LoaderBalls__item"></div>
          <div className="LoaderBalls__item"></div>
        </div>
      </div>
    );
  } else {
    return <Table columns={columns} dataSource={data} />;
  }
};

const mapStateToProps = state => {
  return {
    token: state.context.token
  };
};

export const MappedTable = connect(mapStateToProps)(Tabl);
