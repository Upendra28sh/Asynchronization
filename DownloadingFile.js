function download(url, downloaded)
{
    console.log("File is downloading form path : "+url)
    setTimeout(function()
    {
        let filepath="c:\\Downloads"
        downloaded(filepath)
    },4000)
}

function resize(url,resized)
{
    console.log("file at this path is being resized :"+url)
    setTimeout(function()
    {
        resizedpath="c\\Downloads\\Resized"
        resized(resizedpath)
    },4000)
}

function upload(url,uploaded)
{
    console.log("File of this path is being uploaded:"+url)
    setTimeout(function()
    {
        uploadPath="http://github.com/upendrash"
        uploaded(uploadPath)
    },4000)
}

download("http://google.com", function(filepath)
{
    console.log("File Downloaded to :"+filepath)
    resize(filepath, function(resizedpath)
    {
        console.log("Reszed file saved to path :"+resizedpath)
        upload(resizedpath,function(uploadPath)
        {
            console.log("File successfully Uploaded to path :"+uploadPath)
        })
    })
})