
var appId
var domain
var countryCode
var client
var stream
var key
// 2022.07.09.22.42

async function isBrowserSupport()
{
    let check = false
    try
    {
        check = await HRTC.checkSystemRequirements()
        console.warn('browser isSupport: ' + check)
    }catch(error)
    {
        console.error('check browser isSupport error: ${error.getCode()} - ${error.getMsg()}')
        if (error.getCode() !== 90100025) 
        {
            console.error(`browser Support part ability of RTC`)
            check = true
        }
    }
    return check
}

function create_client()
{
    // appId = '62b85294fa163ec25c4716bcd89a21e1'
    appId = '62b84cfcfa163e19fe30190db496d63d'
    // domain = '62b85294fa163ec25c4716bcd89a21e1.cloudrtc.myhuaweicloud.com'
    domain = '62b84cfcfa163e19fe30190db496d63d.cloudrtc.myhuaweicloud.com'
    countryCode = 'CN'
    let config = {appId : appId, domain : domain, countryCode : countryCode}
    // appId = 001;
    // countryCode = CN;
    // let client = HRTC.createClient(config)
    client = HRTC.createClient(config)
    alert('create client success!')
    // return client
}

function getUTCTime()
{
    let d1 = new Date()
    let d2 = new Date(d1.getFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds())
    return Date.parse(d2)
}

function joinroom()
{
    // roomId = '001' // 需要其他函数获得room ID

    // userId = '114514'
    // userName = 'Doooooolphin'    // user ID 和 user Name 也需其他函数获得
    roomId = document.getElementById('roomID').value
    userId = document.getElementById('userID').value
    userName = document.getElementById('username').value

    role = 0
    ctime = getUTCTime()
    ctime = ctime / 1000 + 60 * 60
    ctime = ctime.toString()
    signature = appId + '+' + roomId + '+' + userId + '+' + ctime
    console.log(typeof ctime)
    console.log(typeof signature)

    var hash_server
    $.ajax({
        url:"http://117.78.3.226:5000/login",
        type:"post",
        dataType:"json",

        data:JSON.stringify({
            sig: signature 
        }),
        async : false,
        success:function (data)
        {
            console.log('success')
            hash_server = data.hash
        },
        error:function ()
        {
            console.log('fail')
            console.log('*********')
        }
    })

    console.log('*******')
    console.log('*******')
    console.log('*******')
    console.log('*******')
    console.log('*******')
    console.log(hash_server)


    let option = {userId: userId, userName: userName, signature: hash_server, ctime: ctime, role: role}
    async function join_Room()
    {
        try
        {
            await client.join(roomId, option)
            console.log('join room success')
        }catch(error)
        {
            console.log('join room fail', error)
        }
    }
    join_Room()
    // console.log(aa)
    alert('join room success!')
    subscribe()
    playremotestream()
    
}

// function createstream(client)
function createstream()
{

    stream = HRTC.createStream({audio: true, microphoneId : 0, video: true, cameraId : 0})
    stream.initialize().then(() => {
        // stream.addResolution('90p_1')
        stream.setVideoProfile('720p_1')
        document.getElementById('main-display_HD').style.display = 'block'
        stream.play(elementId = 'main-display_HD', {muted: true})
        alert('create a stream success!')
    })
    
}

function publish()
{
    client.publish(stream)
    alert('publish success!')
}

function unpublish()
{
    client.unpublish(stream)
    alert('unpublish success!')
}

function subscribe()
{
    console.log('before')
    client.on('stream-added', (event) =>{
        console.log('before2')
        let stream = event.stream
        console.log(stream)
        client.subscribe(stream, {video: true, audio: true})
        console.log('subscribe success')
        // stream.play(elementId = 'main-display2', {muted: false})
    })
}

function playremotestream()
{
    client.on('stream-subscribed', (event) => {
        const stream = event.stream
        document.getElementById('main-display2').style.display = 'block'
        stream.play(elementId = 'main-display2', {objectFit: 'contain', muted: false})
    })
    
}

function leave()
{
    client.leave()
}

function videocut_per_second()
{
    let arr = [1, 2, 3, 4, 5]
    async function sleep()
    {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 5000)
        })
    }
    (async () => {
        for(let i in arr){
            await sleep ();
            videocut()
        }
    })()
    alert('video cut success!')

}

function videocut()
{
    var video_id = get_video_id()
    var player = document.getElementById(video_id)
    console.log(player)
    player.setAttribute("crossOrigin", "anonymous")
    var canvas = document.createElement("canvas")
    var img = document.createElement("img")
    canvas.width = player.clientWidth
    canvas.height = player.clientHeight
    canvas.getContext("2d").drawImage(player, 0, 0, canvas.width, canvas.height)
    var dataURL = canvas.toDataURL("image/png")
    img.src = dataURL
    img.width = player.clientWidth
    img.height = player.clientHeight
    img.style.border="1px solid #333333"
    
    let myDate = new Date()
    var mytime = myDate.toLocaleString()


    $.ajax({
        type: 'post',
        url: 'http://117.78.3.226:5000/getImg',
        
        dataType: 'json',
        data:JSON.stringify({
            time: mytime,
            src: img.src,
        }),
        processData: false,
        contentType: false,
        // xhrFields:{withCredentials:true},
        async: false,
        success: function (data) {
            console.log(data)
        },
        error: function () {
            console.log('fail')
            console.log('********************************')
        },
    })


}


function get_video_id()
// function test()
{
    let div = document.getElementsByTagName('video');
    let id = div[0].id
    return id
}



