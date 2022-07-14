/// <reference types="node" />
import { EventEmitter } from "events";
declare enum MediaType {
    TRACK_TYPE_AUDIO = "audio",
    TRACK_TYPE_VIDEO = "video"
}
declare enum StreamType {
    STREAM_TYPE_MAIN = "main",
    STREAM_TYPE_AUX = "aux"
}
interface OptionInfo {
    [propName: string]: any;
}
interface JoinConfig {
    userId: string;
    userName?: string;
    signature: string;
    ctime: string;
    role: number;
    optionInfo?: OptionInfo;
}
interface APP_DATA {
    nickname?: string;
    show_window?: boolean;
}
interface LocalUser {
    userId: string;
    encUserId: string;
    userName?: string;
    signature: string;
    ctime: string;
    role: number;
    roleSignalType: string;
    appData?: APP_DATA;
    roomId: string;
}
interface AudioStream {
    content?: string;
    mute?: boolean;
    maxMbps?: number;
    minMbps?: number;
    sampleRate?: number;
    channels?: number;
    codec?: string;
    pt: number;
    streamData?: {
        [key: string]: string;
    };
    streamUid?: number;
    ssrc: number;
    createDate?: number;
    streamId?: number;
}
interface VideoStream {
    content?: string;
    originalContent?: string;
    mute?: boolean;
    width?: number;
    height?: number;
    fps?: number;
    maxMbps?: number;
    minMbps?: number;
    maxFs?: number;
    codec?: string;
    pt: number;
    streamData?: {
        [key: string]: string;
    };
    streamUid?: number;
    ssrc: number;
    createDate?: number;
}
interface UpStreamData {
    userId?: string;
    userEid?: string;
    userUid?: number;
    userRid?: number;
    encCountryCode?: string;
    videoStreams?: Array<VideoStream>;
    audioStreams?: Array<AudioStream>;
    appData?: {
        [key: string]: string;
    };
    userVersion?: number;
}
interface SubStreamInfoReq {
    minReceiveContent?: string;
    mediaData?: Object;
    pUserId?: string;
    pUserUid?: number;
    pStreamUid?: number;
    pSsrcId: number;
    cSsrcId: number;
}
interface CryptoType {
    type: number;
}
interface StreamCodec {
    content?: string;
    codec?: string;
    pt?: number;
    decode?: string;
    encode?: string;
    streamUid?: number;
    level?: number;
}
interface AudioRepSdpInfo {
    streamCodecs?: Array<StreamCodec>;
    audioLevel?: number;
    port?: number;
    sendSsrcRange?: Array<number>;
    sendSsrcBegin?: number;
    sendSsrcEnd?: number;
    receiveSsrcRange?: Array<number>;
    receiveSsrcBegin?: number;
    receiveSsrcEnd?: number;
    streamId?: number;
    topNSsrcBegin?: number;
    topNSsrcEnd?: number;
    topNSsrcRange?: Array<number>;
}
interface CmdRepSdpInfo {
    sendSsrc?: number;
    receiveSsrc?: number;
    streamUid?: number;
    content?: string;
    codec?: string;
    pt?: number;
}
interface VideoRepSdpInfo {
    secCap?: string;
    streamCodecs?: Array<StreamCodec>;
    port?: number;
    sendSsrcRange?: Array<number>;
    sendSsrcBegin?: number;
    sendSsrcEnd?: number;
    receiveSsrcRange?: Array<number>;
    receiveSsrcBegin?: number;
    receiveSsrcEnd?: number;
}
interface CodecData {
    codec?: string;
    pt: number;
    ability?: number;
}
interface VideoReqSdpInfo {
    content?: string;
    codecs: Array<CodecData>;
}
interface SdpRepInfo {
    sfuIp?: string;
    sfuPrivateIp?: string;
    ltrFrame?: boolean;
    crypto?: CryptoType;
    audio?: AudioRepSdpInfo;
    video?: VideoRepSdpInfo;
    desktopVideo?: VideoRepSdpInfo;
    cmd?: CmdRepSdpInfo;
    videoReqSdpInfoList?: Array<VideoReqSdpInfo>;
}
interface PublishConfig {
    width: number;
    height: number;
    videoBitrate: number;
    videoFramerate: number;
    videoGop: number;
    audioSampleRate: number;
    audioBitrate: number;
    audioChannels: number;
    audioCodecProfile?: number;
    videoCodecProfile?: number;
    template?: number;
    backGroundColor?: number;
}
interface UpStreams {
    content?: string;
    mute?: boolean;
    width?: number;
    height?: number;
    fps?: number;
    maxFs?: number;
    sampleRate?: number;
    channels?: number;
    maxMbps?: number;
    codec?: string;
    pt?: number;
    streamData?: {
        [key: string]: string;
    };
    streamUid: number;
    ssrc?: number;
    createDate?: number;
    streamId?: number;
}
interface SubscribeStream {
    userid: string;
    nickname?: string;
    streamid?: string;
    roomid?: string;
    width?: number;
    height?: number;
    bandwidth?: number;
    ssrc: number;
    audioSsrc?: number;
    aux?: boolean;
    codec?: number;
    auto_adjust_resolution?: number;
    min_resolution?: string;
    action?: number;
    media?: number;
}
interface Authorization {
    signature: string;
    ctime: string;
}
declare enum ContentType {
    main = "main",
    middle1 = "middle1",
    middle2 = "middle2",
    middle3 = "middle3",
    middle4 = "middle4",
    slides = "slides",
    desktop = "desktop"
}
declare const enum ClientStatus {
    Idle = 0,
    Joining = 1,
    Joined = 2,
    Leaving = 3,
    Rejoining = 4
}
interface ClientConfig {
    appId: string;
    domain?: string;
    countryCode: string;
}
interface SubscribeOption {
    video?: boolean;
    audio?: boolean;
    resolutionIds?: string[];
    autoAdjustResolution?: number;
}
interface InnerSubscribeOption extends SubscribeOption {
    minResolution?: ResolutionType;
}
interface SubscribeParam {
    userId: string;
    resolutionIds?: string[];
    autoAdjustResolution?: number;
    minResolution?: ResolutionType;
}
type ResolutionType = "FHD" | "HD" | "SD" | "LD";
interface BatchSubscribeOption {
    userId: string;
    resolutionIds: string[];
    autoAdjustResolution?: number;
    minResolution?: ResolutionType;
}
declare enum PortType {
    portNormal = 1,
    portReduce = 2
}
interface JoinQos {
    id: number;
    domain: string;
    start_ms: number;
    delay_ms: number;
    stepName: string;
    rspCode: string;
    errMsg?: string;
}
interface TransportStats {
    bytesSent: number;
    bytesReceived: number;
    sendBitrate: number;
    recvBitrate: number;
    rtt: number;
}
interface ResolutionLayout {
    resolutionId: string;
    subWidth?: number;
    subHeight?: number;
    localX?: number;
    localY?: number;
    renderMode?: number;
    alpha?: number;
    subBackGroundColor?: number;
    zorder?: number;
}
interface UserConfig {
    userId: string;
    audio: boolean;
    resolutionIds: string[];
    layouts?: ResolutionLayout[];
}
interface TurnServerConfig {
    turnServers: string[];
    udpPort?: number;
    userName?: string;
    credential?: string;
}
interface ProviderInfo {
    appId?: string;
    roomId?: string;
    userName?: string;
    userId?: string;
    domain?: string;
    caller?: string;
    userDomain?: string;
    upStreamData?: UpStreamData;
    sdpRepInfo?: SdpRepInfo;
    countryCode?: string;
}
interface LogProvider {
    getInfo(): ProviderInfo;
    getSymbol(): symbol;
    getModuleName?(): string;
    onLogUploadRequest?(filename: string): void;
    onLogUploadResponse?(filename: string, status: number): void;
    onLogUploadResult(status: number): void;
    onLogUploadProgress?(ev: ProgressEvent<EventTarget>): void;
}
declare const LogLevels: string[];
type LogLevel = typeof LogLevels[number];
declare class Logger {
    private readonly provider;
    private logBuffer;
    private logBufferSize;
    private tag;
    constructor(provider?: LogProvider);
    error(tag: string, msg: string, info?: ProviderInfo): void;
    warn(tag: string, msg: string, info?: ProviderInfo): void;
    info(tag: string, msg: string, info?: ProviderInfo): void;
    debug(tag: string, msg: string, info?: ProviderInfo): void;
    log(level: LogLevel, tag: string, msg: string, info?: ProviderInfo): void;
    setTag(tag: string): void;
    clearLogs(): void;
    setlogBufferSize(size: number): void;
    getlogBufferSize(): number;
    getProvider(): LogProvider;
    getLogBuffer(): string[];
}
declare class RtcError extends Error {
    code: number;
    constructor(code: number, message?: string);
    getCode(): number;
    getMsg(): string;
    toString(): string;
}
declare class RTCPlayer {
    private state_;
    protected event_: EventEmitter;
    protected mediaStream_: MediaStream;
    protected track_: MediaStreamTrack;
    protected playerDiv_: any;
    protected log_: Logger;
    protected playerElement_: any;
    protected playerId_: string;
    protected playTimeOutTimer: NodeJS.Timeout;
    protected module_: string;
    protected pauseCount: number;
    protected sysEventRegisterUid: string;
    protected trackEnable: boolean;
    protected listenHandlers: {
        canPlayHandler: any;
        playingHandler: any;
        playerEndedHandler: any;
        playerPausedHandler: any;
        trackEndedHandler: any;
        trackMutedHandler: any;
        trackUnmutedHandler: any;
        playHandler: any;
        backgroundHandler: any;
        foregroundHandler: any;
    };
    constructor(option: {
        logger: Logger;
        track: MediaStreamTrack;
        playerDiv: any;
        playerId: string;
    });
    on(event: any, func: any): void;
    off(event: any, func: any): void;
    private foregroundHandler;
    private backgroundHandler;
    private canPlayHandler;
    private playingHandler;
    private playerEndedHandler;
    private playerPausedHandler;
    private trackEndedHandler;
    private trackMutedHandler;
    private trackUnmutedHandler;
    protected closeAllEvents(): void;
    protected handleEvents(): void;
    stop(): void;
    replaceTrack(track: MediaStreamTrack): void;
    protected resume(playParameters: any): Promise<Error>;
    private multiPlatformAdapter;
    protected doPlay(resolve: any, reject: any, playParam: any): Promise<any>;
    private afterPlayStrategy;
}
declare class RTCAudioPlayer extends RTCPlayer {
    private readonly muted_;
    private outputDeviceId_;
    private volume_;
    private soundMeter_;
    constructor(option: {
        logger: Logger;
        playerDiv?: any;
        playerId: string;
        track: MediaStreamTrack;
        muted?: boolean;
        volume?: number;
    });
    play(): Promise<Error>;
    setSinkId(deviceId: string): void;
    setVolume(volume: number): void;
    getAudioLevel(): number;
    stop(): void;
    resume(): Promise<Error>;
    replaceTrack(track: MediaStreamTrack): void;
}
interface StreamConfig {
    audio?: boolean;
    microphoneId?: string;
    video?: boolean;
    cameraId?: string;
    facingMode?: string;
    screen?: boolean;
    screenAudio?: boolean;
    audioSource?: MediaStreamTrack;
    videoSource?: MediaStreamTrack;
    mirror?: boolean;
    userId?: string;
}
interface RTCAudioProfile {
    sampleRate?: number;
    channelCount?: number;
    bitrate?: number;
}
interface RTCVideoProfile {
    width?: number;
    height?: number;
    frameRate?: number;
    minBitrate?: number;
    maxBitrate?: number;
}
interface RTCVideoProfileInfo extends RTCVideoProfile {
    resolutionId: string;
    hasTrack?: boolean;
}
interface StreamInfo {
    videoProfiles?: RTCVideoProfileInfo[];
    audioProfile?: RTCAudioProfile;
}
interface RTCScreenProfile {
    width?: number;
    height?: number;
    frameRate?: number;
    bitrate?: number;
}
interface LocalAudioStats {
    bytesSent: number;
    packetsSent: number;
}
interface LocalVideoStats {
    bytesSent: number;
    packetsSent: number;
    framesEncoded: number;
    framesSent: number;
    frameWidth: number;
    frameHeight: number;
}
interface AllLocalVideoStats {
    mainStream: LocalVideoStats[];
    subStream: LocalVideoStats;
}
interface RemoteAudioStats {
    bytesReceived: number;
    packetsReceived: number;
    packetsLost: number;
}
interface RemoteVideoStats {
    bytesReceived: number;
    packetsReceived: number;
    packetsLost: number;
    framesDecoded: number;
    frameWidth: number;
    frameHeight: number;
}
interface AllRemoteVideoStats {
    mainStream: RemoteVideoStats[];
    subStream: RemoteVideoStats;
}
interface AudioMixOption {
    filePath: string;
    startTime?: number;
    replace?: boolean;
    loop?: boolean;
    repeatCount?: number;
}
type AudioPlayStatus = "init" | "notAllow" | "normal" | "otherError";
interface AudioStream$0 {
    audioPlayer: RTCAudioPlayer;
    audioMediaTrack: MediaStreamTrack;
    streamId: string;
    playStatus: AudioPlayStatus;
    ssrc?: number;
}
interface MediaCaptureResult {
    type: MediaType;
    track?: MediaStreamTrack;
    error?: RtcError;
}
interface CommonProfile {
    streamId: string;
    width?: number;
    height?: number;
}
interface StreamOption {
    video?: boolean;
    audio?: boolean;
    resolutionIds?: string[];
}
interface VideoCaptureOption {
    cameraId?: string;
    resolutionId?: string;
}
interface MediaQueryFilter {
    hasTrack?: boolean;
    mediaType?: MediaType;
}
interface PlayResult {
    trackType: MediaType;
    error: Error;
}
declare class HRTCTrack {
    private readonly log_;
    private readonly resolutionId_;
    private trackId_;
    private readonly trackType_;
    private track_;
    private readonly streamType_;
    private profile_;
    private readonly isRemote_;
    private player_;
    private elementId_;
    private objectFit_;
    private playState_;
    private trackMuted_;
    private audioVolume_;
    private content;
    private readonly statusChangeReporter_;
    private readonly statusTraceReporter_;
    private event_;
    private cameraCaptureHandleTimer;
    constructor(options: {
        trackType: MediaType;
        streamType: StreamType;
        isRemote: boolean;
        resolutionId: string;
        trackProfile?: any;
        logger?: Logger;
        track?: MediaStreamTrack;
        event?: EventEmitter;
    });
    initScreenShare(screenAudio?: boolean): Promise<MediaCaptureResult[]>;
    initAudioCapture(microphoneId?: string): Promise<MediaCaptureResult>;
    initVideoCapture(cameraId: string, content: ContentType): Promise<MediaCaptureResult>;
    private getUserMedia;
    private static isTrackAvailable;
    private setCameraCaptureReport;
    private clearCameraCaptureReport;
    private handleCaptureError;
    isClosed(): boolean;
    isPlaying(): boolean;
    getTrackType(): MediaType;
    getResolutionId(): string;
    getTrackId(): string;
    getElementId(): string;
    getObjectFit(): string;
    setTrackId(trackId: string): void;
    getTrackProfile(): any;
    setTrackContentType(content: ContentType): void;
    getTrackContentType(): ContentType;
    updateTrackProfile(profile: CommonProfile): void;
    setTrackProfile(profile: any): void;
    getTrack(): MediaStreamTrack;
    replaceTrack(track: MediaStreamTrack): Promise<void>;
    setLocalProfileByTrack(track: MediaStreamTrack): void;
    removeTrack(): void;
    play(playerDiv: HTMLElement, elementId: string, options?: {
        objectFit?: string;
        mirror?: boolean;
        muted?: boolean;
    }): Promise<PlayResult>;
    replay(): Promise<RtcError>;
    stop(): void;
    close(): void;
    resume(): Promise<RtcError>;
    restart(): Promise<void>;
    getTrackMuted(): boolean;
    muteTrack(): void;
    unmuteTrack(): void;
    setSinkId(deviceId: string): void;
    setAudioVolume(volume: number): void;
    getAudioLevel(): number;
    getVideoFrame(): string;
    setAudioOutput(outputDeviceId: string): void;
}
declare class StreamInitializeResult extends RtcError {
    private readonly captureResults;
    constructor(code: number, message: string, captureResults?: MediaCaptureResult[]);
    getMediaCaptureResult(): MediaCaptureResult[];
    getMediaCaptureResultByType(type: MediaType): MediaCaptureResult;
    toString(): string;
}
declare class Stream {
    private readonly streamSymbol;
    private callbackMap;
    private onCallbackMap;
    private playDivContainers;
    protected id_: string;
    protected module_: string;
    protected tracks: Record<MediaType, Map<string, HRTCTrack>>;
    protected isRemote_: boolean;
    protected isAuxiliary_: boolean;
    protected type_: string;
    protected logger: Logger;
    protected userId_: string;
    protected mirror_: boolean;
    protected client_: Client[];
    protected stat: any;
    protected eventEmitter: EventEmitter;
    private readonly traceHandler;
    protected mediaStream: MediaStream;
    constructor(option: {
        isRemote: boolean;
        type: string;
        log: Logger;
    });
    getStreamInfo(): StreamInfo;
    private getStreamInfoImpl;
    getMaxResolutionHRTCTrack(includeUninitialized?: boolean): HRTCTrack;
    protected getMaxResolutionProfile(profiles: Map<string, RTCVideoProfile>): RTCVideoProfileInfo;
    getHRTCTracks(option?: MediaQueryFilter): HRTCTrack[];
    protected getHRTCTrackIds(option?: MediaQueryFilter): string[];
    protected getAnyVideoHRTCTrack(resolutionId?: string): HRTCTrack;
    getVideoHRTCTrack(resolutionId?: string): HRTCTrack;
    protected getAnyAudioHRTCTrack(): HRTCTrack;
    protected getUninitializedAudioHRTCTrack(): HRTCTrack;
    protected getUninitializedVideoHRTCTrack(resolutionId?: string): HRTCTrack;
    getAudioHRTCTrack(): HRTCTrack;
    getSymbol(): symbol;
    getUniqueId(): string;
    getInfo(): ProviderInfo;
    onLogUploadResult(): void;
    onLogUploadProgress(): void;
    private startupPlay;
    play(elementId: string, options?: {
        objectFit?: string;
        muted?: boolean;
        resolutionId?: string;
        playerElementHidden?: boolean;
    }): Promise<void>;
    private playImpl;
    private reportCanPlay;
    private playerStatusTrace;
    private playTracks;
    stop(option?: StreamOption): void;
    private stopImpl;
    resume(option?: StreamOption): Promise<void>;
    private resumeImpl;
    close(option?: StreamOption): void;
    protected closeImpl(option?: StreamOption): void;
    private closeAudio;
    muteAudio(): boolean;
    private muteAudioImpl;
    muteVideo(): boolean;
    private muteVideoImpl;
    unmuteAudio(): boolean;
    private unmuteAudioImpl;
    unmuteVideo(): boolean;
    private unmuteVideoImpl;
    getId(): string;
    setStreamId(streamId: string, resolutionId?: string): void;
    getUserId(): string;
    getType(): string;
    setAudioOutput(deviceId: string): Promise<void>;
    private setAudioOutputImpl;
    setAudioVolume(volume: number): void;
    private setAudioVolumeImpl;
    getAudioLevel(): number;
    hasAudioTrack(): boolean;
    hasVideoTrack(): boolean;
    isAuxiliary(): boolean;
    getAudioTrack(): MediaStreamTrack;
    getVideoTrack(resolutionId?: string): MediaStreamTrack;
    getVideoFrame(resolutionId?: string): string;
    private getOnCallback;
    private getOffCallback;
    on(event: any, func: any): void;
    off(event: any, func: any): void;
    restart(resolutionId?: string): Promise<void>;
    rePlayAudio(): Promise<void>;
    getStatInfo(): any;
    protected getStatExtraInfo(): any;
    hasAudio(): boolean;
    hasVideo(): boolean;
}
declare class LocalStream extends Stream {
    private readonly audio_;
    private readonly video_;
    private cameraId_;
    private effectiveCameraId_;
    private readonly facingMode_;
    private microphoneId_;
    private effectiveMicrophoneId_;
    private readonly videoSource_;
    private readonly audioSource_;
    private readonly screen_;
    private readonly screenAudio_;
    private audioProfile_;
    private readonly videoProfiles_;
    private screenProfile_;
    private readonly videoContents;
    private audioMixOption_;
    private audioMixInfo_;
    private auxStreamStopByNativeHandler;
    private mutePackageData;
    private muteSendInfo;
    private screenShareMixInfo;
    constructor(config: StreamConfig);
    private setMediaStream;
    getMediaStream(): MediaStream;
    getLocalId(): string;
    initialize(): Promise<StreamInitializeResult>;
    private reset;
    private initAuxStream;
    private initMainStreamWithCfg;
    private initMainStream;
    private initializeImpl;
    setCameraCaptureReport(videoTrackActual: MediaTrackSettings, videoTrackSettings: MediaTrackSettings): void;
    private addCaptureWithCfg;
    private appendDefaultLocalTrack;
    private generateResolutionId;
    private initMainStreamWithTrack;
    addAudioTrackCapture(microphoneId?: string): Promise<MediaStreamTrack>;
    private addAudioTrackCaptureImpl;
    addVideoTrackCapture(option?: VideoCaptureOption): Promise<MediaStreamTrack>;
    private addVideoTrackCaptureImpl;
    private updateEffectiveDeviceInfo;
    private getCurrentCameraId;
    private getCurrentMicrophoneId;
    getAudioSendBitrate(): number;
    isAudioMuted(): boolean;
    isVideoMuted(resolutionId?: string): boolean;
    setAudioProfile(profile: string | RTCAudioProfile): void;
    private setAudioProfileImpl;
    getVideoMaxBitrate(resolutionId?: string): number;
    getVideoMaxSendBitrate(resolutionId?: string): number;
    getVideoMiniBitrate(resolutionId?: string): number;
    getVideoWidth(resolutionId?: string): number;
    getVideoHeight(resolutionId?: string): number;
    getVideoframeRate(resolutionId?: string): number;
    getVideoProfile(resolutionId?: string): RTCVideoProfile;
    setVideoProfile(profile: string | RTCVideoProfile, resolutionId?: string): Promise<void>;
    addResolution(profile: string | RTCVideoProfile, audio?: boolean): Promise<RTCVideoProfileInfo>;
    private addResolutionImpl;
    removeResolution(resolutionId: string): Promise<void>;
    private removeResolutionImpl;
    private setVideoProfileImpl;
    getScreenSendBitrate(): number;
    getScreenWidth(): number;
    getScreenHeight(): number;
    getScreenframeRate(): number;
    setScreenProfile(profile: string | RTCScreenProfile): void;
    private setScreenProfileImpl;
    private switchVideoDevice;
    private switchAudioDevice;
    switchDevice(type: string, deviceId: string): Promise<void>;
    private switchDeviceImpl;
    addTrack(track: MediaStreamTrack, resolutionId?: string): Promise<void>;
    private addTrackImpl;
    removeTrack(track: MediaStreamTrack): Promise<void>;
    private removeTrackImpl;
    replaceTrack(track: MediaStreamTrack, type: string, resolutionId?: string): Promise<void>;
    private replaceTrackImpl;
    addClient(client: Client): void;
    removeClient(client: Client): void;
    muteAudio(): boolean;
    muteVideo(): boolean;
    unmuteAudio(): boolean;
    unmuteVideo(): boolean;
    protected closeImpl(option?: StreamOption): void;
    clearEffectiveDeviceId(deviceId: string, type: string): void;
    startSendMutePackage(): void;
    stopSendMutePackage(): void;
    bindScreenAudio2RelatedStream(bindStream: LocalStream, muteMainStreamAudio?: boolean): void;
    private bindScreenAudio2RelatedStreamImpl;
    private mixScreenAudio;
    getPublishAudioTrack(): MediaStreamTrack;
    resumeMixScreenAudio(): Promise<void>;
    stopMixScreenAudio(): Promise<void>;
    setAudioVolume(volume: number): void;
    private closeScreenShareAudio;
    startAudioMixing(option: AudioMixOption): Promise<void>;
    private startAudioMixingImpl;
    private doAudioMixing;
    private setAudioMixOption;
    private initIdleAudioMixInfo;
    private checkAudioMixingParameter;
    private replaceMixAudioTrack;
    stopAudioMixing(): Promise<void>;
    private stopAudioMixingImpl;
    pauseAudioMixing(): void;
    private pauseAudioMixingImpl;
    resumeAudioMixing(): void;
    private resumeAudioMixingImpl;
    getAudioMixingCurrentPosition(): number;
    getAudioMixingDuration(): number;
    setAudioMixingVolume(level: number): void;
    private setAudioMixingVolumeImpl;
    setAudioMixingPosition(position: number): void;
    private setAudioMixingPositionImpl;
    getStatInfo(): any;
}
declare class RemoteStream extends Stream {
    private readonly roomId_;
    constructor(option: {
        type: string;
        log: Logger;
        userId: string;
        client: Client;
        roomId?: string;
    });
    muteAudio(): boolean;
    unmuteAudio(): boolean;
    getVideoHRTCTrackByTrackId(trackId: string): HRTCTrack;
    updateRemoteResolutions(streamType: StreamType, streamProfiles: CommonProfile[], hasAudioTrack: boolean): void;
    private getHRTCTracksProfileString;
    addRemoteTrack(track: MediaStreamTrack, trackId: string): void;
    isTracksReady(videoTrackIds: string[], includeAudio?: boolean): boolean;
    isTrackReady(mediaType: MediaType, trackId: string): boolean;
    removeRemoteAudioTrack(): void;
    removeRemoteVideoTrack(resolutionId: string): void;
}
interface CommInfo {
    timestamp?: number;
    trace_id?: string;
    instance_id?: string;
    room_uid?: string;
    domain?: string;
    appid?: string;
    corp?: string;
    room_id?: string;
    user_id?: string;
    sdk_version?: string;
    event: number;
    event_name?: string;
    sdk_name?: string;
    service_name?: string;
    operator?: string;
    net_type?: string;
    country?: string;
    province?: string;
    city?: string;
}
interface Media {
    ssrc_uid: string;
    stream_uid: string;
    sfu_addr: string;
}
interface MediaInfo extends CommInfo {
    streams: Media[];
}
interface MediaStreamReceiverFrame {
    userId: string;
    isAux?: boolean;
    decodedFrame: number;
}
interface StartupQoSInfo {
    timestamp: number;
    traceId: string;
    spanId: string;
    originIntfName: string;
    interfaceName: string;
    source: string;
    target: string;
    resultCode: string;
    successFlag: string;
    duration: number;
    async: string;
    extendInfo: string;
}
interface StartupQoSCoreInfo {
    traceId: string;
    spanId: string;
    originIntfName: string;
    interfaceName: string;
    id: string;
    streamIds: string[];
    start: number;
}
interface TraceInfo {
    version: string;
    startTimestamp: number;
    traceId: string;
    spanId: string;
    parentSpanId: string;
    ip: string;
    source: string;
    target: string;
    spanName: string;
    status: string;
    endTimestamp: number;
    url: string;
    httpMethod: string;
    requestSize: string;
    responseSize: string;
    statusCode: string;
    tag: string;
    Events: string;
    scope: string;
}
interface SsrcInfo {
    ssrc: number;
    userid: string;
    packet_cnt: number;
}
interface InBoundAudioSsrcInfo extends CommInfo {
    access_addr: string;
    sfu_addr: string;
    audio_policy: number;
    topn: number;
    audios_change_cnt: number;
    audios: SsrcInfo[];
    no_stream_cnt: number;
}
declare const enum ConnectionType {
    "SIGNAL" = 0,
    "MEDIA" = 1
}
interface SfuInfo {
    ipAddress: string;
    videoPort?: number;
    audioPort?: number;
    auxPort: number;
}
interface AudioLevel {
    type: string;
    level: number;
    ssrc?: number;
    userId?: string;
}
interface LocalTrackInfo {
    type: MediaType;
    resolutionId: string;
    upstream: UpStreams;
}
interface LocalTrackPublishInfo extends LocalTrackInfo {
    published: boolean;
    watched: boolean;
    ssrc: number;
    sender: RTCRtpSender;
}
type resolutionId = string;
interface LocalStreamInfo {
    localStream: LocalStream;
    streamId: string;
    localTrackPublishInfos: Map<resolutionId, LocalTrackPublishInfo>;
}
interface NotifyClientJoinRoomSuccess {
    status?: string;
    role?: string;
    userId?: string;
    userUid?: number;
    userEid?: string;
    userRid?: number;
    appData?: {
        [key: string]: string;
    };
    streamId?: number;
    videoStreamCodecs?: Array<StreamCodec>;
    encCountryCode?: string;
}
interface UserInfo {
    userId: string;
    userUid: number;
    roomId: string;
    nickname: string;
}
declare const enum RemoteUserState {
    NotJoin = 0,
    Joined = 1,
    Rejoining = 2
}
declare const enum TrackState {
    normal = 0,
    resolutionChange = 1,
    remoteRejoinCache = 2,
    localRejoin = 3
}
interface CachedPlayParam {
    playElement?: string;
    objectFit?: string;
    muted?: boolean;
}
interface RemoteTrackInfo extends CachedPlayParam {
    content: string;
    trackId: string;
    pssrc: number;
    cssrc: number;
    type: MediaType;
    width?: number;
    height?: number;
    state: TrackState;
    isSubscribed: boolean;
    isTrackReady: boolean;
    streamType: StreamType;
    autoAdjustResolution?: number;
    minResolution?: ResolutionType;
    mute: boolean;
    streamData?: {
        [key: string]: string;
    };
    fps?: number;
    maxMbps?: number;
    maxFs?: number;
    codec?: string;
    pt: number;
    sampleRate?: number;
    channels?: number;
}
interface RemoteUserInfo {
    userInfo: UserInfo;
    userState: RemoteUserState;
    mainStream: RemoteStreamInfo;
    auxStream: RemoteStreamInfo;
}
interface ResolutionInfo extends CachedPlayParam {
    resolutionId: string;
    width: number;
    height: number;
}
interface FllSubscribeOption {
    video?: boolean;
    audio?: boolean;
    resolutions?: ResolutionInfo[];
    audioPlayInfo?: CachedPlayParam;
    autoAdjustResolution?: number;
    minResolution?: ResolutionType;
}
interface RemoteStreamInfo {
    remoteTrackInfos: Map<string, RemoteTrackInfo>;
    remoteStream: RemoteStream;
    subscribeOption: FllSubscribeOption;
}
interface RemoteStreamUpdateInfo {
    remoteStream: RemoteStream;
    preTracks?: RemoteTrackInfo[];
    curTracks?: RemoteTrackInfo[];
    addedTracks?: RemoteTrackInfo[];
    updatedTracks?: RemoteTrackInfo[];
    removedTracks?: RemoteTrackInfo[];
    subscribedTracks?: RemoteTrackInfo[];
    tracks4Subscribe?: RemoteTrackInfo[];
    tracks4Unsubscribe?: RemoteTrackInfo[];
    allSubscribeTracks: RemoteTrackInfo[];
}
interface RemoteUserUpdateInfo {
    userInfo: UserInfo;
    preUserState: RemoteUserState;
    curUserState: RemoteUserState;
    isUserNameChanged?: boolean;
    mainStream: RemoteStreamUpdateInfo;
    auxStream: RemoteStreamUpdateInfo;
}
interface RemoteUserSubscribeResult {
    successSubscribeInfos: RemoteUserSubscribeInfo[];
    failSubscribeInfos: RemoteUserSubscribeInfo[];
    successUnsubscribeInfos: RemoteUserSubscribeInfo[];
    failUnsubscribeInfos: RemoteUserSubscribeInfo[];
}
interface StreamBasicInfo {
    remoteStream: RemoteStream;
    tracks: RemoteTrackInfo[];
}
interface RemoteUserSubscribeInfo {
    userId: string;
    roomId: string;
    mainStream: StreamBasicInfo;
    auxStream: StreamBasicInfo;
}
interface HRTCRemoteUserManager {
    checkSsrcIsMute(ssrc: number): boolean;
    checkRemoteTop3NeedReport(): boolean;
    initialize(localUserId: string, sdpInfo: SdpRepInfo): void;
    updateUserListInfo(roomId: string, userInfos: NotifyClientJoinRoomSuccess[]): RemoteUserUpdateInfo[];
    refreshRemoteUserList(roomId: string, roomUserInfos: UpStreamData[], isLocalRejoin: boolean): RemoteUserUpdateInfo[];
    refreshRemoteStreamList(userInfo: UserInfo, allVideoStreams: VideoStream[], allAudioStreams: AudioStream$0[]): RemoteUserUpdateInfo[];
    updateRemoteStream(userInfo: UserInfo, videoStreams: VideoStream[], audioStreams: AudioStream$0[]): RemoteUserUpdateInfo;
    remoteUserReconnect(userInfo: UserInfo, videoStreams: VideoStream[], audioStreams: AudioStream$0[]): void;
    getAllUserStreamsByType(roomId: string, streamType: StreamType, mediaType: MediaType): RemoteUserSubscribeInfo[];
    getUserInfoById(userId: string, roomId: string): RemoteUserInfo;
    batchSubscribeMainStream(roomId: string, options: BatchSubscribeOption[]): RemoteUserUpdateInfo[];
    subscribeStream(userId: string, roomId: string, streamType: StreamType, trackOption: InnerSubscribeOption, audioPolicy: number, isVideoSubscribeOverride: boolean, startupQoSCoreInfo: StartupQoSCoreInfo): RemoteUserUpdateInfo[];
    resubscribeMainStreamAudio(roomId: string): RemoteUserUpdateInfo[];
    unsubscribeAllMainStreamAudio(roomId: string): RemoteUserUpdateInfo[];
    unsubscribeStream(userId: string, roomId: string, streamType: StreamType, trackOption: InnerSubscribeOption): RemoteUserUpdateInfo[];
    enableTopThreeAudioMode(roomId: string): any;
    updateUserName(userId: string, roomId: string, nickName: string): void;
    isRemoteUserSubscribed(userId: string, roomId: string): boolean;
    getUserInfoByStreamId(roomId: string, streamId: string): RemoteUserInfo;
    subscribeResultCallback(subscribeResult: RemoteUserSubscribeResult, isException: boolean): void;
    clear(roomId?: string): any;
    getStreamInfoByPStreamUid(pStreamUid: number): RemoteTrackInfo;
}
interface AddUserRes {
    offerSdp?: string;
    answerSdp?: string;
    streamId?: string;
}
interface RTCIceTransportStat {
    currentRoundTripTime?: number;
    availableOutgoingBitrate?: number;
    bytesSent?: number;
    bytesReceived?: number;
}
declare class PeerConnectionsManager {
    private logger;
    private stats;
    private peerConnections;
    private sdpDescMode;
    private rtcSdp;
    private portType;
    private mainReceiverPreStatisticMap;
    private auxReceiverPreStatisticMap;
    private isFireFox;
    private turnServerConfig;
    constructor(logger: Logger, stats: RTCStat);
    setPortType(portType: PortType): void;
    getPortType(): PortType;
    setTurnServer(turnServerConfig: TurnServerConfig): void;
    isConnectionsExist(): boolean;
    getReceivers(pcType: StreamType): RTCRtpReceiver[];
    getSenders(pcType: StreamType): RTCRtpSender[];
    calcChangedStatistic(ssrcLabel: string, statistics: any, properties?: string[]): any;
    private doCalcChangedStatisticObject;
    private clearReveiverPreStatisticBySsrcLabel;
    initConnectionAndSdp(pcType: StreamType, handlers: {
        onTrackHandler: any;
    }, isRetry?: boolean): Promise<void>;
    setSsrcsMapping(sdp: SdpRepInfo): void;
    getMappingSsrcs(ssrcs: number | number[], pcType?: StreamType): any;
    private createOffer;
    private iceCandidateListener;
    private onConnection;
    private iceAddressCollect;
    private createPeerConnection;
    destroyPeerConnection(pcType: StreamType, removeSenders?: RTCRtpSender[]): void;
    modifySdpCandidates(pcType: StreamType): string;
    private setLocalDescriptionShim;
    handleAnswerSdpFromServer(pcType: StreamType, answerSdp: string, handler?: (arg: any) => any): Promise<void>;
    getSfuInfoFromSdp(sdp: string, auxSdp: string): SfuInfo;
    generateAndSetOfferSdpByHandler(pcType: StreamType, handler?: any): Promise<void>;
    generateAndSetAnswerSdpByHandler(pcType: StreamType, handler?: any): Promise<any>;
    deleteUser(pcType: StreamType, videoSSRCs: number[], audioSSRCs: number[]): Promise<void>;
    private recordCurrentReceiverStatistic;
    private getAllIdleReceiverTransceivers;
    private getIdleSendTransceiver;
    addTrack(pcType: StreamType, track: MediaStreamTrack, mediaStream: MediaStream): Promise<RTCRtpSender>;
    removeTrack(pcType: StreamType, sender: RTCRtpSender): void;
    modifyPublishOfferSdp(pcType: StreamType, userId: string, videoSsrcs?: number[], audioSsrc?: number, removeVideoSsrcs?: number[], removeAudioSsrc?: number): Promise<string>;
    addTopAudioUserBatch(answerSdp: string, startAudioSsrc: number, batchSize: number, handler: any): Promise<AddUserRes>;
    addUserBatch(pcType: StreamType, ssrcInfos: Map<string, {
        streamId?: string;
        videoSsrc?: number;
        audioSsrc?: number;
    }[]>): Promise<void>;
    private addTransceiver;
    getConnection(pcType: StreamType): RTCPeerConnection;
    getConnectionRTT(): number;
    getICETransportStat(pcType: StreamType): RTCIceTransportStat;
    getStats(data: RTCStatsReport, ssrc: number, direction: string, pcType?: StreamType): any;
}
declare class MediaStats {
    private readonly logger;
    private connectionsManager;
    private videoFreezeKey;
    private mediaStatInfo;
    private mediaStatDebugInfo;
    private mediaStatSumInfo;
    private mediaStatSumDebugInfo;
    private ACSAddr;
    private SFUAddr;
    private lastSenderInfo;
    private lastSenderDebugInfo;
    private encryUserId;
    private remoteStreamInfo;
    private audioPolicy;
    private LocalStreamInfo;
    private auxsStreamInfo;
    private audioReceiveInfo;
    private videoReceiveInfo;
    private audioReceiveDebugInfo;
    private videoReceiveDebugInfo;
    private rtcStatsInteval;
    private inBoundAudioSsrcInfos;
    private audioPolicyLastCycle;
    private audioStreamReceiverMap;
    private ssrcChangeCount;
    private audioStreamInfos;
    private audioCount;
    private audioStreamAllInfos;
    private audioAllCount;
    private audioStreamTop3Count;
    private audioStreamTop3CountTimer;
    private module_;
    private tempStat;
    private stat;
    private audioLevelInfo;
    private startSsrc;
    private remoteUserManager;
    private remoteUserMuteStatus;
    constructor(logger: Logger);
    setEncryInfo(userId: string, encryUserId: string): void;
    getEncryInfo(userId: string): string;
    clearEncryUserId(): void;
    setRemoteUserManager(remoteUserManager: HRTCRemoteUserManager): void;
    setStartSsrc(startSsrc: number): void;
    updateAudioLevel(audioLevel: AudioLevel): void;
    private getAudioLevel;
    setConnectionsManager(connectionsManager: PeerConnectionsManager): void;
    setSubscribeInfo(streamInfo: RemoteUserSubscribeInfo): void;
    private doClearRemoteStreamInfoCache;
    private clearRemoteStreamInfoCache;
    private clearRemoteStreamInfoCache4Stream;
    private clearLocalStreamInfoCache;
    private clearAuxsStreamInfoCache;
    setLocalMainStreamInfo(uid: string, publishInfos: LocalTrackPublishInfo[]): boolean;
    setLocalAuxsStreamInfo(uid: string, streamInfo: LocalStreamInfo): boolean;
    refreshUpstreams(upstreams: UpStreams[]): void;
    deleteSubscribeInfo(uid: string, streamType: StreamType, streamId?: string): void;
    setAudioPolicy(audioPolicy: number): void;
    setSFUAddr(addr: string): void;
    setACSAddr(addr: string): void;
    leaveRoom(): void;
    getAudioPolicy(): number;
    getTransportMediaStats(): TransportStats;
    getMediaStatInfo(): MediaInfo[];
    getMediaStatSum(): CommInfo[];
    getInBoundAudioSsrc(): InBoundAudioSsrcInfo[];
    dealStats(): Promise<void>;
    clearTempStats(): void;
    clearMediaStatBytes(): void;
    cleanAudioStreamInfos(): void;
    updateAudioStreamInfos(userid: string, type: string): void;
    updateAudioStreamTop3(length: number): void;
    private checkAudioStreamInfosIsExist;
    private setAudioStreamInfo;
    private getAudioStreamInfo;
    buildAudioStreamInfo3(): Promise<void>;
    buildAudioStreamInfo2(): Promise<void>;
    getVideoReceiverFrameDecodedMap(): Promise<Map<string, MediaStreamReceiverFrame>>;
    private buildFrameDecodedMap;
    private getReceiverInfo;
    private buildReceiverInfo;
    private checkMuteStatusIsChange;
    private buildAudioReceiverInfo;
    private buildAudioReceiver4SubscribedMode;
    private buildVideoReceiverInfo;
    private static buildVideoTrackInfo;
    private buildCommonVideoRecvInfo;
    private getSenderInfo;
    private buildSenderInfo;
    private buildAudioSenderInfo;
    private buildVideoSenderInfo;
    private static buildCommonVideoSendInfo;
    buildRtcStatsDebugInfo(interval: number): Promise<{
        mediaStatsDebugInfo: any;
        mediaStatsSumDebugInfo: any;
    }>;
}
declare class RTCStat {
    private module_;
    private readonly logger;
    private eventInfoMap;
    private reqInfoMap;
    private user;
    private joinTime;
    private sfuInfo;
    commInfo: CommInfo;
    deviceInfo: {
        audioOutputId: any;
        audioInputId: any;
        videoInputId: any;
    };
    private mediaStats;
    private mediaOpsData;
    private mediaCollectionTimer;
    private remoteUserManager;
    private signalSendMsgs;
    private signalReceiveMsgs;
    private parentSpanIdMap;
    private spanIdMap;
    constructor(logger: Logger, clientConfig?: ClientConfig);
    private static isStatiscEnable;
    private addCommInfo;
    setRemoteUserManager(remoteUserManager: HRTCRemoteUserManager): void;
    clearMediaStatBytes(): void;
    collectReceiverDecodedFrameMap(): Promise<Map<string, MediaStreamReceiverFrame>>;
    setLocalUserInfo(localUser: LocalUser): void;
    setTraceInfo(traceId: string): void;
    setRoomUid(roomUid: string): void;
    setSFUAddress(info: SfuInfo): void;
    getMediaStat(): MediaStats;
    leaveRoom(): void;
    startMediaCollector(): void;
    reportAudioMuteInfo(type: number, mute: boolean): void;
    reportVideoMuteInfo(userId: string, mute: boolean): void;
    setDeviceStatusInfo(): Promise<void>;
    recordUploadRequsetInfo(data: any): void;
    getDownloadRequestInfo(data: any): string;
    recordDownloadRequestInfo(data: any): void;
    private setMediaStatInfo;
    private setMediaStatSumInfo;
    private setInBoundAudioSsrcInfos;
    private setRequestId;
    reportJoinInfo(code: number, acsAddr?: string, isRejoin?: boolean, joinQosInfo?: JoinQos[], failMessage?: string): void;
    reportLeavInfo(result: number): void;
    reportVideoSub(type: number, requestId: string, videoStream: SubStreamInfoReq[], result: number, resultMessage: string): void;
    reportSwitchDevicesInfo(type: number, deviceId: string, result: number, opt?: number): void;
    reportSwitchRoleInfo(role: number, result: number): void;
    reportStartSendMediaStream(type: number, opt: string): void;
    setMediaCaptureSucc(deviceType: number, deviceName: string): void;
    reportAuxiliaryStreamShareInfo(action: number, result: number): void;
    setAudioSubscribeInfo(streams: SubscribeStream[], requestId: string, result: number): void;
    reportAudioSub(action: number, requestId: string, audioStream: SubStreamInfoReq[], result: number): void;
    setConnectionStatusInfo(on: number, type: ConnectionType): void;
    reportUpStreamVideoInfo(upStreams: VideoStream[], requestId: string, result: number): void;
    reportAudioPolicyInfo(policy: number, requestId: string, result: number): void;
    setSysBasicInfo(): void;
    setCameraInfo(vdieoTrackActual: MediaTrackSettings, vdieoTrackSettings: MediaTrackSettings): void;
    setSpeakerInputInfo(): void;
    setMicrophoneInfo(): void;
    setSpeakerDeviceInfo(speakers: MediaDeviceInfo[]): Promise<void>;
    setCameraDeviceInfo(cameras: MediaDeviceInfo[]): Promise<void>;
    setMicrophoneDeviceInfo(microphones: MediaDeviceInfo[]): Promise<void>;
    setDeviceChangedInfo(type: string, deviceId: string, state: number): void;
    setAvAlarmInfo(): void;
    setMediaQualityEvaluationInfo(): void;
    setDeviceUserAgent(): void;
    reportSignalReqForLogUpload(filename: string): void;
    reportSignalReqForHeartBeatLost(data: any, sendTime: number): void;
    reportSignalReqForWeb2Server(data: any): void;
    reportSignalReqForServer2Web(data: any): void;
    reportSignalRepForLogUpload(filename: string, status: number): void;
    reportSignalRepForServer2Web(request: any, response: any): void;
    setApiCallInfo(apiShortName: string, start: number, end: number, exception: any, ret: any, ...params: any): void;
    recordCallbackInfo(event: string, module: string, start: number, end: number, params: any, handler: any): void;
    setFirstFrameInfo(startupQoSInfo: StartupQoSInfo): void;
    setSpanId(parentSpanId: string, spanId: string): void;
    getSpanId(parentSpanId: string): string;
    setParentSpanId(spanId: string, parentSpanId: string): void;
    getParentSpanId(spanId: string): string;
    checkSignalReceiveMsgs(spanName: string): boolean;
    checkSignalSendMsgs(spanName: string): boolean;
    reportTraceInfo2Nuwa(traceInfo: TraceInfo): void;
    buildRtcStatsDebugInfo(interval: number): Promise<{
        mediaStatsDebugInfo: any;
        mediaStatsSumDebugInfo: any;
    }>;
}
declare class Client {
    private callbackMap;
    private onCallbackMap;
    private taskLocker;
    private signal;
    readonly logger: Logger;
    private readonly clientSymbol;
    private status;
    private userInfo;
    private roomId;
    readonly clientConfig: ClientConfig;
    private waitConfigCallbackFunc;
    private streamPublishManager;
    private readonly eventEmitter;
    private localRejoinFlag;
    private isLoopRejoining;
    private connectState;
    readonly stat: RTCStat;
    private accessManager;
    private audioPolicy;
    private netQualityTimer;
    private lastCycleFrameDecodedMap;
    private readonly streamInterruptedUsersMap;
    private streamInterruptedDetectInterval;
    private streamDetectionCriterion;
    private rtcStatsInterval;
    private rtcStatsCriterion;
    private audioStreams4TopN;
    private topNAudioVolume;
    private downLinkData;
    private upLinkData;
    private preNetQuality;
    private readonly top3VolumeUserIds;
    private readonly connectionsManager;
    private readonly remoteUserManager;
    private audioLevelTimer;
    private readonly audioLevelInterval;
    private upStreamData;
    private sdpRepInfo;
    private startupQoSMap;
    constructor(config: ClientConfig);
    getSessionStatus(): ClientStatus;
    private getOnCallback;
    private getOffCallback;
    on(event: any, func: any): void;
    off(event: any, func: any): void;
    getSymbol(): symbol;
    getInfo(): ProviderInfo;
    enableTopThreeAudioMode(enable: boolean): boolean;
    private enableTopThreeAudioModeImpl;
    switchAudioMode(audioMode: number): Promise<number>;
    private switchAudioPolicyTop2User;
    private resubscribeUserAudio;
    private switchAudioPolicyUser2Top;
    unsubscribeAudio4SubscribeUsers(): Promise<void>;
    unsubscribeAudio4Top(): Promise<void>;
    unsubscribeAudio4SubscribeAll(): Promise<void>;
    unsubscribeUsersAudio(): Promise<void>;
    getLocalAudioStats(): Promise<Map<string, LocalAudioStats>>;
    getLocalVideoStats(): Promise<Map<string, AllLocalVideoStats>>;
    getRemoteAudioStats(): Promise<Map<string, RemoteAudioStats>>;
    getRemoteVideoStats(): Promise<Map<string, AllRemoteVideoStats>>;
    isSendingStream(): boolean;
    isReceivingStream(): boolean;
    private getRemoteVideoTracksStatistic;
    private getDownloadStatistic;
    private getTrackDownloadStatistic;
    private static getSender;
    private static getSenderType;
    private getUploadStatistic;
    getConnectionState(): string;
    getTransportStats(): Promise<TransportStats>;
    getICETransportStat(streamType: StreamType): RTCIceTransportStat;
    private cleanTransportStats;
    onLogUploadRequest(filename: string): void;
    onLogUploadResponse(filename: string, status: number): void;
    onLogUploadResult(status: number): void;
    onLogUploadProgress(ev: ProgressEvent): void;
    join(roomId: string, options: JoinConfig): Promise<void>;
    private joinImpl;
    reportLogs(): Promise<void>;
    private statJoinRoomInfo;
    enableRtcStats(enable: boolean, interval: number): Promise<void>;
    enableRtcStatsImpl(enable: boolean, interval: number): Promise<void>;
    private doEnableRtcStats;
    private doTriggerRtcStats;
    private addRtcStatInfos;
    leave(): Promise<void>;
    private leaveImpl;
    private doLeaveRoom;
    private resetConnection;
    private rejoin;
    changeStreamMuteStatusNotify(mute: boolean, mediaType: MediaType, content?: ContentType, hasSlideTrack?: boolean): Promise<void>;
    setSendBitrate(rtpSender: RTCRtpSender, maxBitrate: number, mediaType: string): Promise<void>;
    private static judgeNetworkQuality;
    private calcNetworkQuality;
    private netQualityRegularReport;
    private validatePublishRequest;
    publish(stream: Stream): Promise<void>;
    private publishImpl;
    private publishStream;
    private sendPublishRequest;
    private updateStreamTracks;
    private updateMainStreamTrack;
    private updateAuxStreamTrack;
    private sendAudioMedia;
    private sendVideoMedia;
    private generateNewOfferSdp;
    private sendPublishReq;
    private addVideoTracksWhenPublish;
    private addAudioTrackWhenPublish;
    private removeTracksWhenPublish;
    private getKeepAudioTrackSsrcSender;
    private getKeepVideoTracksSsrcSender;
    private buildSendMediaStreamInfo;
    unpublish(stream: Stream): Promise<void>;
    private unpublishImpl;
    private unPublishStream;
    private rejoinPublishStreams;
    private addLocalAuxStreamEndedHandler;
    subscribeAudio(userId: string): Promise<RemoteStream | void>;
    private subscribeAudioImpl;
    unSubscribeAudio(userId: string): Promise<void>;
    unSubscribeAudioImpl(userId: string): Promise<void>;
    startupQoSReportPlay(id: string, start: number): void;
    startupQoSReportCanPlay(event: any): void;
    subscribe(stream: RemoteStream, option?: SubscribeOption): Promise<void>;
    private subscribeImpl;
    doSubscribe(stream: RemoteStream, option: SubscribeOption, startupQoSCoreInfo: StartupQoSCoreInfo): Promise<RemoteUserSubscribeResult>;
    batchSubscribe(subscribeInfos: SubscribeParam[]): Promise<void>;
    private checkSubscribeParams;
    doBatchSubscribe(subscribeInfos: SubscribeParam[]): Promise<void>;
    private batchDeleteUnusedSsrcInSdp;
    enableStreamStateDetection(enable: boolean, interval: number): Promise<void>;
    private startStreamDetection;
    unsubscribe(stream: Stream, option?: SubscribeOption): Promise<void>;
    private unsubscribeImpl;
    switchRole(role: number, authorization?: Authorization): Promise<void>;
    private switchRoleImpl;
    getPublishAudioSender(): RTCRtpSender;
    getPublishedMainAudioTrackInfo(): LocalTrackPublishInfo;
    getPublishedMainVideoTrackInfos(): LocalTrackPublishInfo[];
    getPublishVideoSender(streamType: StreamType): RTCRtpSender[];
    getMainStreamSenderByTrack(trackId: string): RTCRtpSender;
    private waitForTrackBatch;
    private computeSucceedStreamCount;
    private newSignal;
    private onTrackHandler;
    private static isStreamAdd;
    private static isStreamRemove;
    private static isStreamUpdate;
    private static getMuteChangeStatus;
    private static getMediaMuteChangeFlag;
    private static getMuteChangeFlag;
    private updateSubscribe;
    private getSubscribeExceptionResult;
    private getSubscribeResultString;
    private rollbackResource;
    private isNormalStateStream;
    private handleReadyStream;
    private handleReadyStreamByType;
    private getMediaNotifyInfo;
    private reportMediaStatus;
    private handleReadyTrack;
    private handleRemoteStreamsState;
    private isStreamTrackReady;
    private handleRemoteStreamsStateByType;
    private getRemoteUserSubscribeInfoString;
    private releaseTrack;
    private clearResource;
    private generateReceiveSdp;
    private static getWatchType4Ops;
    private static isSubscriptionChange;
    private appendSubscribeResult;
    private subscribeSignal;
    private doMySubscribe;
    private static getUserTrackSubscribeInfo;
    private static getUserUpdateInfos;
    private getSubscribeResult;
    private getStreamSubscribeResult;
    private appendToSubscribeResult;
    private static newRemoteUserSubscribeInfo;
    private handleUnsubscribeReq;
    private hasTrackSignalReq;
    private getTracksSubscribeResults;
    private getTrackSubscribeResult;
    private updateUserList;
    private refreshRemoteStreamList;
    private updateSingleUser;
    private updateAudioStreamInfo;
    private remoteUserDisconnectNotify;
    private remoteUserReconnectNotify;
    private updateAppData;
    private updateRemoteStream;
    private handleMuteStatus;
    private removeRemoteStream;
    private emitMediaStatusChange;
    private waitNotifyConfig;
    private handleConfigNotifyBody;
    private uploadLog;
    private handleWatchMsg;
    private reportMediaStreamInfo;
    private publishWhenWatch;
    setCameraCaptureReport(vdieoTrackActual: MediaTrackSettings, vdieoTrackSettings: MediaTrackSettings): void;
    private signalEvent;
    private kickRoom;
    private refreshRoomUserInfos;
    private doRefreshRoomUserInfos;
    private rejoinLoop;
    private handleRejoin;
    private rejoinPublish;
    private handleNotifySignatureExpired;
    private handleNotifyConnectStateChange;
    private cleanNetworkStatistic;
    private cleanup;
    private addSsrc4Top3;
    private setAudioLevelStatTimer;
    private addSsrc2SdpBatch;
    private saveAudioStream4TopN;
    private handleMaxVolumeNotify;
    private handlePublishStatusNotify;
    setVolume4TopThree(volume: number): void;
    private setVolume4TopThreeImpl;
    muteAudio4TopThree(enable: boolean): void;
    private muteAudio4TopThreeImpl;
    isTopNAudioMuted(): boolean;
    private isTopNAudioMutedImpl;
    changeUserName(userName: string): Promise<boolean>;
    private changeUserNameImpl;
    reportAudioMuteInfo(type: number, mute: boolean): void;
    reportVideoMuteInfo(userId: string, mute: boolean): void;
    startLiveStreaming(taskId: string, urls: string[], publishConfig: PublishConfig, userConfigs: UserConfig[]): Promise<void>;
    private startLiveStreamingImpl;
    private getLiveStreamingUserInfos;
    private getLocalLiveStreamingUserInfos;
    private static getSsrcLayout;
    private getRemoteLiveStreamingUserInfos;
    private static updateSlidePublishInfo;
    updateLiveStreaming(taskId: string, urls: string[], publishConfig: PublishConfig, userConfigs: UserConfig[]): Promise<void>;
    private updateLiveStreamingImpl;
    stopLiveStreaming(taskId: string): Promise<void>;
    private stopLiveStreamingImpl;
    setProxyServer(proxyServer: string): void;
    setTurnServer(turnServerConfig: TurnServerConfig): void;
}
type LogLevel$0 = typeof LogLevels[number];
declare const _default: {
    VERSION: string;
    setLogLevel(level: LogLevel$0): void;
    checkSystemRequirements(strictCheckBrowser?: boolean): Promise<boolean>;
    isScreenShareSupported(): boolean;
    getDevices(): Promise<MediaDeviceInfo[]>;
    getCameras(): Promise<MediaDeviceInfo[]>;
    getMicrophones(): Promise<MediaDeviceInfo[]>;
    getSpeakers(): Promise<MediaDeviceInfo[]>;
    setParameter(parameterKey: string, parameterValue: any): boolean;
    createClient(config: ClientConfig): Client;
    createStream(config: StreamConfig): LocalStream;
};
export { _default as default };
