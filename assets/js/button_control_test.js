
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
    if (check)
    {
        alert('此浏览器符合条件')
    }
    else
    {
        alert('此浏览器不符合条件，请更换浏览器')
    }
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
    // alert('create client success!')
    // return client
    // joinroom()
    let arr = [1]
    async function sleep()
    {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })
    }
    (async () => {
        for(let i in arr){
            await sleep ();
            // arr_return.push(videocut())
            // videocut()
            // arr_return.push(getnumber(i))
            // base64_str, return_text = videocut()
            joinroom()
        }
    })()
}

function getUTCTime()
{
    let d1 = new Date()
    let d2 = new Date(d1.getFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds())
    return Date.parse(d2)
}

function joinroom()
{
    roomId = '001'
    userId = Math.random().toString(36).slice(-8)
    userName = Math.random().toString(36).slice(-8)
    

    // userId = '114514'
    // userName = 'Doooooolphin'    // user ID 和 user Name 也需其他函数获得
    // roomId = document.getElementById('roomID').value
    // userId = document.getElementById('userID').value
    // userName = document.getElementById('username').value

    role = 0
    ctime = getUTCTime()
    ctime = ctime / 1000 + 60 * 60
    ctime = ctime.toString()
    signature = appId + '+' + roomId + '+' + userId + '+' + ctime
    console.log(typeof ctime)
    console.log(typeof signature)

    var hash_server
    $.ajax({
        // url:"http://117.78.3.226:5000/login",
        url:"http://116.204.64.235:5000/login",
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
    document.getElementById('predict_button').style.display = 'block'
    stream = HRTC.createStream({audio: true, microphoneId : 0, video: true, cameraId : 0})
    stream.initialize().then(() => {
        // stream.addResolution('90p_1')
        stream.setVideoProfile('720p_1')
        document.getElementById('main-display_HD').style.display = 'block'
        
        stream.play(elementId = 'main-display_HD', {muted: true})
        alert('create a stream success!')
    })
    
}

function createstream_audio_only()
{
    audio_only_stream = HRTC.createStream({audio: true, microphoneId : 0, video: true, cameraId : 0})
    audio_only_stream.initialize().then(() => {
        // stream.addResolution('90p_1')
        audio_only_stream.setVideoProfile('720p_1')
        document.getElementById('main-display_HD').style.display = 'block'
        
        // audio_only_stream.play(elementId = 'main-display_HD', {muted: true})
        console.log('create an audio only stream success!')
        client.publish(audio_only_stream)
    })

}

function unpublish_stream_audio_only()
{
    client.unpublish(audio_only_stream)
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

function single_photo()
{
    document.getElementById('predict_gif').style.display = 'block'
    document.getElementById('predict_result').style.display = 'none'
    let arr = [1]
    let arr_return = new Array()
    let score_final = {}
    async function sleep()
    {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 000)
        })
    }
    (async () => {
        for(let i in arr){
            await sleep ();
            // arr_return.push(videocut())
            // videocut()
            // arr_return.push(getnumber(i))
            // base64_str, return_text = videocut()
            return_data = videocut()
            base64_str = return_data.base64_str
            return_text = return_data.text
            document.getElementById('predict_gif').style.display = 'none'
            document.getElementById('predict_result').style.display = 'block'
            base64_str = 'data:image/jpg;base64,' + base64_str
            // console.log(base64_str)
            document.getElementById('img_return').src = base64_str
            document.getElementById('img_return').style.width = '720px'
            document.getElementById('img_return').style.height = '480px'
            document.getElementById('label').value = return_text

            var synth = window.speechSynthesis
            var u = new SpeechSynthesisUtterance();
            //汉语
            u.lang = 'zh-CN';
            u.rate = 1;
            function speak(textToSpeak) {
                u.text = textToSpeak;
                synth.speak(u)
            }
            speak(return_text)
        }
        // console.log(base64_list.length)
        
        // var img_id = new Array
        // for (let j = 0; j < base64_list.length; j++)
        // {
        //     let str = 'return_img_' + String(j)
        //     img_id.push(str)
        // }
        // for (let j = 0; j < base64_list.length; j++)
        // {
            // document.getElementById('predict_gif').style.display = 'none'
            // document.getElementById('predict_result').style.display = 'display'
            // var return_img = document.createElement('img')
            // base64_str = 'data:image/jpg;base64,' + base64_str
            // return_img.src = base64_str
            // var div = document.getElementById('predict_result')
            // div.appendChild(return_img)
            // base64_str = 'data:image/jpg;base64,' + base64_str
            // document.getElementById('img_return').src = base64_str
            // document.getElementById('img_return').style.width = '720px'
            // document.getElementById('img_return').style.height = '480px'
            // document.getElementById('')    
        // }
        
        
        
        

    })()
}



function videocut_per_second()
{
    document.getElementById('predict_gif').style.display = 'block'
    let arr = [1]
    let arr_return = new Array()
    let score_final = {}
    async function sleep()
    {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 1500)
        })
    }
    (async () => {
        for(let i in arr){
            await sleep ();
            arr_return.push(videocut())
            // videocut()
            // arr_return.push(getnumber(i))
            // base64_str = videocut()
        }
        alert('video cut success!')
        // console.log(arr_return)
        arr_return.push({"predicted_label": "5", "scores": [["5", "0"], ["0", "0.044"], ["2", "0.022"], ["6", "0.013"], ["3", "0.002"]]})
        arr_return.push({"predicted_label": "5", "scores": [["4", "1"], ["0", "0.044"], ["2", "0.022"], ["6", "0.013"], ["3", "0.002"]]})
        arr_return.push({"predicted_label": "5", "scores": [["5", "2"], ["0", "0.044"], ["2", "0.022"], ["6", "0.013"], ["3", "0.002"]]})
        arr_return.push({"predicted_label": "5", "scores": [["4", "3"], ["0", "0.044"], ["2", "0.022"], ["6", "0.013"], ["3", "0.002"]]})
        arr_return.push({"predicted_label": "5", "scores": [["5", "100"], ["0", "0.044"], ["2", "0.022"], ["6", "0.013"], ["3", "0.002"]]})

        // console.log(arr_return)
        let arr_return_ = new Array()
        for (j = 0; j < arr_return.length; j++)
        {
            item = arr_return[j]
            // console.log('item["scores"]', item['scores'])
            arr_return_.push(item['scores'])
            // console.log(arr_return_)
        }
   
        for (j = 0; j < arr_return_.length; j++)
        {
            line = arr_return_[j]
            label = line[0][0]
            item_score = Number(line[0][1])
            if (label in score_final)
            {
                score_final[label][0] = score_final[label][0] + 1
                score_final[label][1] = score_final[label][1] + item_score
            }
            else
            {
                score_final[label] = [1, item_score]
            }
        }
        
        let score_final_label = {}
        for (j in score_final)
        {
            score_final_label[j] = score_final[j][1] / score_final[j][0]
        }
        // console.log(score_final_label)
        let max = 0
        let max_label
        for (j in score_final_label)
        {
            if (score_final_label[j] > max)
            {
                max = score_final_label[j]
                max_label = j
            }

        }
        // console.log(max_label, max)
        document.getElementById('predict_gif').style.display = 'none'
        document.getElementById('predict_result').style.display = 'block'
        document.getElementById('label').value = max_label
        document.getElementById('label_p').value = max

    })()
    


}

function getnumber(i)
{
    $.ajax({
        type: 'post',
        // url: 'http://117.78.3.226:5000/getNumber',
        url: 'http://116.204.64.235:5000/getNumber',
        dataType: 'json',
        data:JSON.stringify({
            number: i,
        }),
        processData: false,
        contentType: false,
        async: false,
        success: function (data) {
            console.log(data)
            return_number = data.return_number
        },
        error: function () {
            console.log('fail')
            console.log('********************************')
        },
    })

    return return_number
}

function videocut()
{
    var video_id = get_video_id()
    var player = document.getElementById(video_id)
    // console.log(player)
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
    // console.log(img)
    let myDate = new Date()
    var mytime = myDate.toLocaleString()


    $.ajax({
        type: 'post',
        // url: 'http://117.78.3.226:5000/getImg',
        url: 'http://116.204.64.235:5000/getImg',
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
            // console.log(data)
            // return_text = data.return_text
            // base64_list = data.base64_str
            // return_text = data.text
            return_data = data
        },
        error: function () {
            console.log('fail')
            console.log('********************************')
        },
    })

    // console.log(base64_list)
    // return base64_list, return_text
    return return_data
    
}


function get_video_id()
// function test()
{
    let div = document.getElementsByTagName('video');
    let id = div[0].id
    return id
}


function connect_service()
{
    $.ajax({
        // url:"http://117.78.3.226:5000/connectservice",
        url:"http://116.204.64.235:5000/connectservice",
        type:"post",
        dataType:"json",

        data:JSON.stringify({
            service: true  
        }),
        async : false,
        success:function (data)
        {
            console.log('success')
        },
        error:function ()
        {
            console.log('fail')
            console.log('*********')
        }
    })
}

