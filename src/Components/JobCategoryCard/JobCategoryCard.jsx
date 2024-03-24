import cardImage1 from "../../assets/icons/accounts.png";
import cardImage2 from "../../assets/icons/creative.png";
import cardImage3 from "../../assets/icons/marketing.png";
import cardImage4 from "../../assets/icons/chip.png";

const cardsData = [
  {
    image:  cardImage1 ,
    title: "Account & Finance",
    description: "300 Jobs Available",
  },
  {
    image:  cardImage2 ,
    title: "Creative Design",
    description: "100+ Jobs Available",
  },
  {
    image:  cardImage3 ,
    title: "Marketing & Sales",
    description: "150 Jobs Available",
  },
  {
    image:  cardImage4 ,
    title: "Engineering Job",
    description: "224 Jobs Available",
  },
];

const JobCategoryCard = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {cardsData.map((card, index) => (
                <div key={index} className="w-64 mb-2 p-6 bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] rounded-lg shadow-lg overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-20 p-2 rounded-lg mb-8 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A]" />
                    <div className="">
                        <h2 className="text-xl font-semibold">{card.title}</h2>
                        <p className="mt-2 text-gray-600">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobCategoryCard;
