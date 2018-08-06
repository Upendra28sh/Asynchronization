function task(done)
{
    console.log("Starting a task")
    setTimeout(done, 3000)
}

task(function()
{
    console.log("Task completed")
})

console.log("hi")