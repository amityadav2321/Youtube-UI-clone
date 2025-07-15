export function VideoCard(props: any) {
    return (
        <div className="cursor-pointer px-3 pt-3">
            <img className="rounded-xl w-full h-auto" src={props.thumb} alt="thumbnail" />

            <div className="pt-3 flex items-start space-x-3">
                <img className="rounded-full w-10 h-10" src={props.channel} alt="channel-logo" />

                <div>
                    <div className="text-white font-semibold text-lg">
                        {props.title}
                    </div>
                    <div className="text-white font-semibold text-lg">
                        {props.description}
                    </div>
                    <div className="text-gray-400 text-sm">
                        {props.channelname}
                    </div>
                    <div className="text-gray-400 text-sm">
                        {props.views} | {props.timestamp}
                    </div>
                </div>
            </div>
        </div>
    );
}
