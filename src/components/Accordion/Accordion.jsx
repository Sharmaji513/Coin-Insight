import React from 'react'

const Accordion = () => {
  return (
    <div className="join join-vertical w-full ">
    <h1 className="text-5xl mb-10">Frequently Asked Questions</h1>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-xl font-medium">How do I track my crypto transactions? </div>
      <div className="collapse-content">
        <p>A cryptocurrency portfolio tracker like CoinLedger can plug in to your wallets and exchanges and make it easy to track all of your crypto transactions.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">Is there a crypto portfolio manager?</div>
      <div className="collapse-content">
        <p>CoinLedger makes it easy to manage your cryptocurrency portfolio. You’ll have a birds eye view of your cryptocurrency transactions and a complete look into your gains, losses, and income across all of your wallets and exchanges.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">How do crypto portfolio trackers work?</div>
      <div className="collapse-content">
        <p>Crypto portfolio trackers use a read-only view of your exchanges and wallets. Read-only access ensures the platform can’t make transactions on your behalf.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">What is the best free crypto portfolio tracker? </div>
      <div className="collapse-content">
        <p>CoinLedger is the best free crypto portfolio tracker on the market. The platform is currently rated 4.8 stars with more than 1,000 reviews on Trustpilot!.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">How do you make a crypto portfolio tracker?</div>
      <div className="collapse-content">
        <p>While you can make your own crypto portfolio tracker with Excel, it does take serious effort to create and maintain. An easier option is to use a free crypto portfolio tracker like CoinLedger.</p>
      </div>
    </div>
  </div>
  )
}

export default Accordion