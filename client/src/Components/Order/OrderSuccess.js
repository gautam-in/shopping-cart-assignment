import { Button, Result } from 'antd';

const OrderSuccess = () => (
  <Result
    status="success"
    title="Successfully Order Placed"
    subTitle=""
    extra={[
      <Button type="primary" key="console">
        View more products
      </Button>,
    ]}
  />
);

export default OrderSuccess;