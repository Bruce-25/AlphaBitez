import { useLocation } from "react-router-dom";
import './Styling/Makepayment.css';

const Makepayments = () => {
  const { products } = useLocation().state || {};
  const receiverPhone = "0748518446";
  const img_url = "https://alphabitez.pythonanywhere.com/static/images/";

  if (!products || products.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h4>Your checkout is empty.</h4>
      </div>
    );
  }

  // Calculate total cost
  const totalCost = products.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
    0
  );

  const handleSendSMS = () => {
    const location = prompt("Enter your delivery location:");
    if (!location) return;

    const itemsList = products.map(item =>
      `${item.type} (${item.price} KES x ${item.quantity || 1})`
    ).join(", ");

    const message = `Hi, I’ve paid KES ${totalCost} for: ${itemsList}. Delivery location: ${location}.`;

    const smsUrl = `sms:${receiverPhone}?body=${encodeURIComponent(message)}`;
    window.location.href = smsUrl;
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Confirm Your Order</h2>

      <div className="row g-4">
        {products.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow">
              <img
                src={img_url + item.product_photo}
                alt={item.type}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.type}</h5>
                <p className="fw-bold text-info">
                  {item.price} KES x {item.quantity || 1}
                </p>
                <p className="text-success fw-bold">
                  Total: {item.price * (item.quantity || 1)} KES
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <h4>Total Amount to Pay:</h4>
        <h2 className="fw-bold text-success mb-3">{totalCost} KES</h2>

        <div className="alert alert-success">
          <h5><strong>Pay to:</strong></h5>
          <p className="fs-4 fw-bold">{receiverPhone}</p>
          <p>After paying, click the button below to send your delivery location and confirm the order. Then forward payment confirmation message to the number </p>
        </div>

        <button className="btn btn-primary btn-lg" onClick={handleSendSMS}>
          Send My Location via SMS
        </button>
      </div>
    </div>
  );
};

export default Makepayments;