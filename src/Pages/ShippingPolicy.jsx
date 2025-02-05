import Baatein from "../images/logo.png";

function ShippingPolicy() {
    return (

        <div className="w-full p-32 bg-white text-black">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <a href="https://sobhagya.in/">
            <img src={Baatein} alt="logo" className="w-14" />
          </a>
          <p className="text-lg font-bold">Sobhagya</p>
        </div>
        <h2 className="text-4xl font-medium">Shipping Policy</h2>
        <p className="text-sm text-slate-500 mt-2">
          Last updated: September 20, 2023
        </p>
      </div>

      {/* Introduction */}
      <div>

        {/* Shipping Policy */}
        <section className="mb-6">
        <h2 className="text-lg font-medium mb-2">Shipping Policy</h2>
        <p className="text-sm text-slate-500 mb-3">
            At Sobhagya, your trust is paramount. We are committed to delivering your
            treasures with care and reliability. Below is an overview of our shipping
            process:
        </p>

        <h3 className="text-md font-medium mb-1">Safe &amp; Secure Delivery</h3>
        <ul className="list-disc list-inside space-y-2 mb-3">
            <li className="text-sm text-slate-500">
            <strong>Packaging:</strong> Every order is carefully packaged to ensure
            that your products (including gemstones, rudraksha, crystals, etc.) arrive
            in pristine condition.
            </li>
            <li className="text-sm text-slate-500">
            <strong>Insurance:</strong> Your order is fully insured during transit.
            </li>
            <li className="text-sm text-slate-500">
            <strong>Trusted Couriers:</strong> We partner with reliable courier
            services such as Shiprocket, Bluedart, and Aftership.
            </li>
        </ul>

        <h3 className="text-md font-medium mb-1">Shipping Timeline</h3>
        <ul className="list-disc list-inside space-y-2 mb-3">
            <li className="text-sm text-slate-500">
            <strong>Dispatch Time:</strong> Orders are processed and dispatched within 4 business days of confirmation. Customized items may take longer.
            </li>
            <li className="text-sm text-slate-500">
            <strong>Delivery Duration:</strong> Standard delivery is typically 7-10 days from dispatch for domestic orders. International orders may take typically 12-15 days, due to customs procedures.
            </li>
            <li className="text-sm text-slate-500">
            <strong>Note:</strong> Timelines are subject to change due to factors beyond our control.
            </li>
        </ul>

        <h3 className="text-md font-medium mb-1">Order Tracking</h3>
        <p className="text-sm text-slate-500 mb-3">
            Once your order is on its way, you will receive a confirmation email with tracking details. You can follow your package’s journey via the provided link.
        </p>

        <h3 className="text-md font-medium mb-1">Delivery Location</h3>
        <ul className="list-disc list-inside space-y-2 mb-3">
            <li className="text-sm text-slate-500">
            <strong>Accurate Address:</strong> Please provide complete and accurate delivery information. We deliver only to residential or business addresses.
            </li>
            <li className="text-sm text-slate-500">
            <strong>Address Changes:</strong> If you need to update your delivery address, please contact our customer support immediately.
            </li>
        </ul>

        <h3 className="text-md font-medium mb-1">What to Expect at Delivery</h3>
        <ul className="list-disc list-inside space-y-2 mb-3">
            <li className="text-sm text-slate-500">
            <strong>ID Verification:</strong> For high-value orders, a signature and ID verification may be required.
            </li>
            <li className="text-sm text-slate-500">
            <strong>Missed Delivery:</strong> Our courier partner will attempt delivery up to three times. If all attempts fail, the package will be returned to us. Please contact our support at{" "}
            <a href="mailto:support@sobhagya.com" className="text-blue-500 underline">
                support@sobhagya.com
            </a>{" "}
            for assistance.
            </li>
        </ul>

        <h3 className="text-md font-medium mb-1">Handling Delays</h3>
        <p className="text-sm text-slate-500 mb-3">
            In the event of delays caused by unforeseen circumstances (e.g., natural disasters, public holidays, strikes, or other Force Majeure events), we will notify you of a revised delivery schedule. The Company is not liable for such delays.
        </p>

        <h3 className="text-md font-medium mb-1">Non-Delivery &amp; Returns</h3>
        <ul className="list-disc list-inside space-y-2 mb-3">
            <li className="text-sm text-slate-500">
            <strong>Missed Delivery:</strong> If your package is not delivered within the expected timeframe, please contact our customer support at{" "}
            <a href="mailto:support@sobhagya.com" className="text-blue-500 underline">
                support@sobhagya.com
            </a>{" "}
            within 30 days of purchase.
            </li>
            <li className="text-sm text-slate-500">
            <strong>Return Policy:</strong> If you receive damaged or missing items, kindly refuse the delivery and contact us immediately with supporting details.
            </li>
        </ul>

        <h3 className="text-md font-medium mb-1">Cancellation Policy</h3>
        <p className="text-sm text-slate-500 mb-3">
            Once an order is placed, cancellations are not permitted.
        </p>

        <h3 className="text-md font-medium mb-1">Our Commitment to You</h3>
        <p className="text-sm text-slate-500">
            We aim to make your shopping experience seamless and delightful. If you have any questions or concerns, please do not hesitate to reach out to our customer support team.
        </p>
        </section>

        {/* Contact Information */}
        <section>
          <p className="text-sm text-slate-500 mb-2">
            If you have any questions about our Shipping Policy, please contact us:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-sm text-slate-500">
              <strong>By email:</strong>{" "}
              <a href="mailto:info@sobhagya.in" className="text-blue-500 underline">
                info@sobhagya.in
              </a>
            </li>
            <li className="text-sm text-slate-500">
              <strong>By Address:</strong>{" "}
              F-10/9, Mandir Marg, Block-F, Opp. Lovely Public School, Krishna Nagar,
              Delhi East, Delhi DL 110051, IN.
            </li>
          </ul>
        </section>
      </div>
    </div>
      
    );
}

export default ShippingPolicy;