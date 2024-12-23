// import React from 'react'
// import { Link } from 'react-router-dom'
// import video from '../../../../assets/video/video'

// export default function TrandingCategories() {
//   return (
//     <section
//       className="es_container py-8 px-[10px]"
//     >
//       <div className="bg-[#041826] px-3 py-3 rounded-xl shadow">
//         <div className="section_title flex items-center justify-between px-4 py-3">
//           <h3 className="text-white text-[16px] font-bold uppercase">
//             Tranding Categories
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 text-white py-3">
//           <div className="grid grid-cols-2  gap-2">
//             <div className="tranding_items lg:w-[300px] w-full">
//               <div className="border border-ftMuteColor/20 rounded-md">
//                 <Link to={'/'}>
//                   <div className="relative">
//                     <video
//                       src={video.borkha}
//                       autoPlay
//                       loop
//                       muted
//                       type="video/mp4"
//                       className="w-full h-full object-cover max-h-[250px] rounded-md"
//                     ></video>
//                     <div className="tranding_content absolute bottom-0 left-0 right-0">
//                       <p className="bg-ftPrimaryColor/50 text-center text-[16px] py-2 rounded-b-md">
//                         Mahuya Borkha
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//             <div className="tranding_items lg:w-[300px] w-full">
//               <div className="border border-ftMuteColor/20 rounded-md">
//                 <Link to={'/'}>
//                   <div className="relative">
//                     <video
//                       src={video.sharee}
//                       autoPlay
//                       loop
//                       muted
//                       type="video/mp4"
//                       className="w-full h-full object-cover max-h-[250px] rounded-md"
//                     ></video>
//                     <div className="tranding_content absolute bottom-0 left-0 right-0">
//                       <p className="bg-ftPrimaryColor/50 text-center text-[16px] py-2 rounded-b-md">
//                         Sharee
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//             <div className="tranding_items lg:hidden  block col-span-2">
//               <div className="border border-ftMuteColor/20 rounded-md">
//                 <Link to={'/'}>
//                   <div className="relative">
//                     <video
//                       src={video.laptop}
//                       autoPlay
//                       loop
//                       muted
//                       type="video/mp4"
//                       className="w-full lg:h-[510px] h-[350px] object-cover  rounded-md"
//                     ></video>
//                     <div className="tranding_content absolute bottom-0 left-0 right-0">
//                       <p className="bg-ftPrimaryColor/50 text-center text-[16px] py-2 rounded-b-md">
//                         Mahuya Borkha
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//             <div className="tranding_items lg:w-[300px] w-full lg:block hidden">
//               <div className="border border-ftMuteColor/20 rounded-md">
//                 <Link to={'/'}>
//                   <div className="relative">
//                     <video
//                       src={video.shirt}
//                       autoPlay
//                       loop
//                       muted
//                       type="video/mp4"
//                       className="w-full h-full object-cover max-h-[250px] rounded-md"
//                     ></video>
//                     <div className="tranding_content absolute bottom-0 left-0 right-0">
//                       <p className="bg-ftPrimaryColor/50 text-center text-[16px] py-2 rounded-b-md">
//                         Shirt
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//             <div className="tranding_items lg:w-[300px] w-full lg:block hidden">
//               <div className="border border-ftMuteColor/20 rounded-md">
//                 <Link to={'/'}>
//                   <div className="relative">
//                     <video
//                       src={video.homeshowcase}
//                       autoPlay
//                       loop
//                       muted
//                       type="video/mp4"
//                       className="w-full h-full object-cover max-h-[250px] rounded-md"
//                     ></video>
//                     <div className="tranding_content absolute bottom-0 left-0 right-0">
//                       <p className="bg-ftPrimaryColor/50 text-center text-[16px] py-2 rounded-b-md">
//                         Home Showcase
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className=" grid grid-cols-2 lg:grid-cols-1 gap-2">
//             {/* Hidden on medium screens and above */}
//             <div className="tranding_items lg:w-[300px] w-full lg:hidden block">
//               <div className="border border-ftMuteColor/20 rounded-md">
//                 <Link to={'/'}>
//                   <div className="relative">
//                     <video
//                       src={video.shirt}
//                       autoPlay
//                       loop
//                       muted
//                       type="video/mp4"
//                       className="w-full h-full object-cover max-h-[250px] rounded-md"
//                     ></video>
//                     <div className="tranding_content absolute bottom-0 left-0 right-0">
//                       <p className="bg-ftPrimaryColor/50 text-center text-[16px] py-2 rounded-b-md">
//                         Shirt
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//             <div className="tranding_items lg:w-[300px] w-full lg:hidden block">
//               <div className="border border-ftMuteColor/20 rounded-md">
//                 <Link to={'/'}>
//                   <div className="relative">
//                     <video
//                       src={video.homeshowcase}
//                       autoPlay
//                       loop
//                       muted
//                       type="video/mp4"
//                       className="w-full h-full object-cover max-h-[250px] rounded-md"
//                     ></video>
//                     <div className="tranding_content absolute bottom-0 left-0 right-0">
//                       <p className="bg-ftPrimaryColor/50 text-center text-[16px] py-2 rounded-b-md">
//                         Home Showcase
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//             <div className="tranding_items">
//               <div className="border border-ftMuteColor/20 rounded-md lg:block hidden">
//                 <Link to={'/'}>
//                   <div className="relative">
//                     <video
//                       src={video.laptop}
//                       autoPlay
//                       loop
//                       muted
//                       type="video/mp4"
//                       className="w-full h-[510px] object-cover  rounded-md"
//                     ></video>
//                     <div className="tranding_content absolute bottom-0 left-0 right-0">
//                       <p className="bg-ftPrimaryColor/50 text-center text-[16px] py-2 rounded-b-md">
//                         Laptop
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
