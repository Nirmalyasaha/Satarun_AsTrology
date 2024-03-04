import { CmsInterFaceType } from "@/interface/cmsHome";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

// export const fetchAboutUs = async () => {
//   const res = await axiosInstance.get(endpoints.cms.about);
//   return res;
// };

// // Faq
// export const faqQuery = () => {
//   const res = axiosInstance.get(endpoints.cms.faq);

//   return res;
// };

////  
export const FetchHomePage= async()=>{
  const res =await axiosInstance.get<CmsInterFaceType>(endpoints.cms.about);
  return res.data.data;
}
