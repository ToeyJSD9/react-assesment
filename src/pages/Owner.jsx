import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Owner = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Owner");
    };
    return (
        <section className='justify-center text-center text-4xl pt-10'>
            <div className="flex gap-x-2">

            </div>


            <div>
                <h1> Toey-Group F -18</h1>
            </div>

            <div className='pl-70 pt-20'>
                <img src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/469709023_8774432585997256_9143221879991742604_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YvXTpJ3k-94Q7kNvgGfEvf8&_nc_oc=AdnJdOc8If-L3mHz4hayoXmR6fOPuCrUE_v9oIlvTKmkAJ1Fjo-Tl1-MrgtGiAF_42yvXndo7kgp3acRkAdRLOTq&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=tHevPq2aDEh1pMaScZ3kRA&oh=00_AYGyRdLYDwKqMHvQ5n6hxE-9dkB5YzWYfSVOm03_AK6v0g&oe=67F2DE89" height="20px" width="300px" alt="" />
            </div>
            <br />
            <br />
            <div className=''>

                <p>
                    Short Biography:
                </p>
                <br />
                <p>
                    ชื่อ นายเผ่าไท โชคบัณฑิต ชื่อเล่นชื่อ เต้ย ที่อยู่ ปัจจุบัน 584 หมู่ 8 ถนนมิตรภาพ อำเภอในเมือง ตำบลบ้านไผ่ จังหวัด ขอนแก่น 40110
                </p>
            </div>

        </section>
    )
}

export default Owner
