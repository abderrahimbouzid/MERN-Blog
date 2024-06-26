import { Alert, Button, Modal, ModalBody, TextInput } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react'
import {useSelector} from 'react-redux'
import { ref,getDownloadURL, getStorage, uploadBytesResumable } from "firebase/storage";
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function DashProfile() {
  const {currentUser} = useSelector(state=>state.user);
  const filePickerRef = useRef();
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUploadingProgress , setImagefileUploadingProgress] = useState(null)
  const [imageFileUploadError,setImageFileUploadError] = useState(null)
  const [imageFileUrl,setImageFileUrl] = useState(null);
 
  const hadleImageChange =  (e) => {
    const file = e.target.files[0];
    if(file){
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  // console.log(image  File,imageFileUrl);
  useEffect(()=>{
    if(imageFile){
         uploadImage();
    }
  },[imageFile])
  const uploadImage = async ()=>{
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage,fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile)
    uploadTask.on(
      'State_change',
      (snapshot) =>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
        setImagefileUploadingProgress(progress.toFixed(0))
      },
      (error) =>{
        setImageFileUploadError("couldn't upload images (file must be less than two megabytes) ");
        setImagefileUploadingProgress(null);
        setImageFile(null);
        setImageFileUrl(null);

      },()=>{
        
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
            setImageFileUrl(downloadURL);
          });
      }
    );
    // console.log("uploading image ...")
  }
  return (
    <div className='max-w-lg mx-auto p-3 w-full '>
      <h1 className='m-7 text-center font-semibold text-3xl '>Profile</h1>
      
        <form className='flex flex-col gap-4'>
          <input type='file' accept='image/*' onChange={hadleImageChange} ref={filePickerRef} hidden/>
          <div className='relative w-32 h-32 self-center cursor-pointer shadow-md rounded-full ' onClick={()=>filePickerRef.current.click()}>
           {
            imageFileUploadingProgress && <CircularProgressbar value={imageFileUploadingProgress} text={`${imageFileUploadingProgress}%`}  strokeWidth={5}
            styles={{
              root: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              },
              path: {
                stroke: `rgba(62, 152, 199, ${
                  imageFileUploadingProgress / 100
                })`,
              },
            }} />
           }
           <img src={imageFileUrl || currentUser.profilePicture} alt="profile picture" 
           className={`rounded-full h-full w-full self-center object-cover border-8 border-[lightgray] ${imageFileUploadingProgress && imageFileUploadingProgress < 100 && 'opacity-25'} `}
           />
          </div>
          {
            imageFileUploadError && <Alert color='failure'>{imageFileUploadError}</Alert>
          }
          <TextInput text='text' id="username" placeholder="username" defaultValue={currentUser.username} />
          <TextInput text='email' id="email" placeholder="email" defaultValue={currentUser.email} />
          <TextInput text='password' id="password" placeholder="password" />
          <Button type='submit' gradientDuoTone='purpleToBlue' outline>
            Update
          </Button>
        </form>
        <div className='text-red-500 flex justify-between mt-5'>
          <span className='cursor-pointer'>Delete Account</span>
          <span className='cursor-pointer'>Sign Out</span>
        </div>
      
    </div>
  )
}
