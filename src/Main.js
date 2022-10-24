import { useEffect, useState } from 'react'
import { Typography } from '@mui/material/'
import { createClient } from '@supabase/supabase-js'

function Main() {
    const [supbase, setSupbase] = useState('')

    const supabaseUrl = 'https://dtldrjiosqxvojqqeflm.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0bGRyamlvc3F4dm9qcXFlZmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1ODcxNDMsImV4cCI6MTk4MjE2MzE0M30.fP0x4sUpSx3MsQsfdOi8BSR6L7RMS0wWDI64JDtUvgI'
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    useEffect(() =>{
        const fetchData = async() =>{
            try{
                let { data: result, error } = await supabase
                .from('character')
                .select('*')
                .eq('char_id', '1')

                setSupbase(result)
            }
            catch(error){
              console.log(error)
            }
        }
        fetchData()
    },[])

    return (
        <>
            <Typography
                align='center'
                variant='h3'
            >
                Text-RPG!
            </Typography>
            {console.log(supbase)}
        </>
    )
}

export default Main