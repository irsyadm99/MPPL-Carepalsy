import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto border-t-2 border-[#7575] mt-24">
      <div className="flex py-12 justify-between items-center">
        <h3 className="text-sm text-gray-500">
          Copyright <span>&#169;</span> 2021 Cerepalsy Focation
        </h3>
        <div className="flex items-center">
          <h3 className="text-sm text-gray-500">Follow us: </h3>
          <div className="flex items-center ml-2 space-x-2 cursor-pointer">
            <FacebookIcon className="!h-8 !w-8" />
            <TwitterIcon className="!h-8 !w-8" />
            <InstagramIcon className="!h-8 !w-8" />
            <YouTubeIcon className="!h-8 !w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
