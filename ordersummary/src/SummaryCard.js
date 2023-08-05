import ImgHero from "./images/illustration-hero.svg";
import IconMusic from "./images/icon-music.svg";

function SummaryCard() {
  return (
    <div className="flex flex-col bg-white rounded-xl drop-shadow-2xl max-w-md">
      <img
        className="rounded-t-xl"
        src={ImgHero}
        alt="A girl who's grabbing his phone and dancing alone with musics icons in the backgrounds"
      />
      {/* Main */}
      <div className="flex flex-col text-center py-6 gap-4 px-7">
        <h1 className="text-xl font-bold">Order Summary</h1>
        <p className="text-center font-medium text-sm text-[#717FA6]">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex flex-col px-3 py-4 rounded-xl bg-[#f7f9ff]">
          {/* Subscription price button */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <img src={IconMusic} alt="" />
              <div className="flex flex-col">
                <h3 className="font-bold text-sm">Annual Plan</h3>
                <p className="font-medium text-gray-500 text-sm">$59.99/year</p>
              </div>
            </div>
            <p className="text-[#382AE1] text-sm font-bold underline transform hover:animate-pulse cursor-pointer hover:no-underline">
              Change
            </p>
          </div>
          {/* Subscription price button */}
        </div>
        {/* Paiement Proceed */}
        <button className="w-full border py-3 bg-[#382AE1] hover:bg-[#766CF1] text-white font-semibold rounded-xl shadow-xl shadow-[#382AE1]/20 hover:animate-pulse">
          Proceed to Payment
        </button>
        <p className="text-[#717FA6] text-sm font-bold hover:text-black cursor-pointer">
          Cancel Order
        </p>
        {/* End Paiement Proceed */}
      </div>
      {/* End Main */}
    </div>
  );
}

export default SummaryCard;
