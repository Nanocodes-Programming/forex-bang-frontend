import { BiEnvelope, BiPhoneCall, BiLocationPlus } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram,BsTelegram,BsYoutube } from "react-icons/bs";

const FooterContact = () => {
  return (
    <div>
    <h1 className="my-[1rem] font-bold text-3xl">Contact Us</h1>
      <ul>
      
        <li className="flex  items-center my-3">
          {" "}
          <span className="mx-2">
            <BiEnvelope />
          </span>{" "}
          support@Cypherforex.com
        </li>
        <li className="flex items-center my-3">
          <span className="mx-2">
            <BiPhoneCall />
          </span>
          +1345667899
        </li>
        <li className="flex items-center my-3">
          <span className="mx-2">
            <BiLocationPlus />
          </span>
          eflsgsgsn f dfs sdf fffsf df f w eerwewer{" "}
        </li>
        <li className="flex justify-around my-[1rem] "><BsFacebook className="text-2xl cursor-pointer"/>  <BsTwitter className="text-2xl cursor-pointer"/> <BsInstagram className="text-2xl cursor-pointer"/> <BsTelegram className="text-2xl cursor-pointer"/> <BsYoutube className="text-2xl cursor-pointer"/></li>
      </ul>
    </div>
  )
}

export default FooterContact
