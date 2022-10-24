import { useEffect, useState } from 'react'
import { Typography } from '@mui/material/'
import { createClient } from '@supabase/supabase-js'

function Main() {
    // Variable for fetched data
    const [base, setBase] = useState('')

    // Credential for SupaBase
    const supabaseUrl = 'https://dtldrjiosqxvojqqeflm.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0bGRyamlvc3F4dm9qcXFlZmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1ODcxNDMsImV4cCI6MTk4MjE2MzE0M30.fP0x4sUpSx3MsQsfdOi8BSR6L7RMS0wWDI64JDtUvgI'
    
    // Async for Fetch Data
    const supabase = createClient(supabaseUrl, supabaseKey)
    useEffect(() =>{
        const fetchData = async() =>{
            try{
                let { data: result } = await supabase
                .from('character')
                .select('*')
                .eq('char_id', '1')

                setBase(result)
            }
            catch(error){
              console.log(error)
            }
        }
        fetchData()
    },[])

    let info = base
    return (
        <>
            <Typography
                align='center'
                variant='h3'
            >
                Text-RPG!
            </Typography>
            <Typography
                align='center'
                variant='body1'
            >
                {info[0].name}
            </Typography>
        </>
    )
}

export default Main