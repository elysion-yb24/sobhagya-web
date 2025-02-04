import Baatein from "../images/logo.png";

export default function ReturnRefundPolicy() {
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
        <h2 className="text-4xl font-medium">Refund Policy</h2>
        <p className="text-sm text-slate-500 mt-2">
          Last updated: September 20, 2023
        </p>
      </div>

      {/* Introduction */}
      <div>
        <p className="text-sm text-slate-500 mb-2">
          Thank you for using Sobhagya, our audio call service.
        </p>
        <p className="text-sm text-slate-500 mb-4">
          If, for any reason, you are not entirely satisfied with our service,
          we invite you to review our policy on refunds and returns. This Return
          and Refund Policy outlines the terms and conditions applicable to any
          purchases made through our service.
        </p>

        {/* Interpretation and Definitions */}
        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">
            Interpretation and Definitions
          </h2>
          <h3 className="text-md font-medium mb-1">Interpretation</h3>
          <p className="text-sm text-slate-500 mb-3">
            The words with initial capitalization have specific meanings defined
            under the following conditions. These definitions apply whether they
            appear in singular or plural form.
          </p>

          <h3 className="text-md font-medium mb-1">Definitions</h3>
          <p className="text-sm text-slate-500 mb-3">
            For the purpose of this Return and Refund Policy:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-sm text-slate-500">
              <strong>Website and App:</strong> These terms apply to your use of
              the Sobhagya website (https://sobhagya.in) and mobile application.
            </li>
            <li className="text-sm text-slate-500">
              <strong>Company:</strong> ELYSION SOFTWARES PRIVATE LIMITED (referred to as “we”, “us”, “our”, or “Sobhagya”).
            </li>
            <li className="text-sm text-slate-500">
              <strong>Your IAP Account:</strong> Your account with your Software Store (Apple App Store or Google Play Store) used for in-app purchases.
            </li>
          </ul>
        </section>

        {/* Order Cancellation and Refunds */}
        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">
            Your Order Cancellation Rights
          </h2>
          <p className="text-sm text-slate-500 mb-3">
            Since Sobhagya does not sell physical goods, there is no option for
            cancellation or return of purchases. Users make payments to purchase
            digital goods, which can be used for connecting with other Sobhagya
            users. Digital goods, including messages, coins, diamonds, etc., may be
            modified, removed, or expire (typically within 12 months) from the date
            of acquisition.
          </p>
          <p className="text-sm text-slate-500 mb-3">
            When you make an in-app purchase, you will be prompted to enter details
            for your IAP Account, and your account will be charged in accordance
            with the terms disclosed at the time of purchase as well as the general
            terms for in-app purchases that apply to your account. Some Software
            Stores may charge a sales tax, depending on your location.
          </p>
          <p className="text-sm text-slate-500 mb-3">
            If you subscribe to an auto-recurring periodic subscription, your IAP
            Account will be billed until you cancel. Even if you delete your Sobhagya
            account or uninstall the app, your subscription will continue until
            canceled through your IAP Account.
          </p>
          <p className="text-sm text-slate-500 mb-3">
            In general, payments once made are not refunded. However, we may make
            an exception if a refund is requested within 14 days of the transaction
            date, if the payment was made in a currency other than INR, the goods
            remain unused, and if refunds are mandated by applicable law. In such
            cases, refunds will be processed within 7 business days and credited to
            your original payment method within 15 working days, subject to delays.
          </p>
          {/*  */}
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
