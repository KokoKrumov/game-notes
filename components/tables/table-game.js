import React from 'react';

function TableGame({gameDetails}) {
    return (
        <div>
            <table className="table-fixed w-full">
                <thead>
                <tr>
                    <th className="w-1/2"/>
                    <th className="w-1/2"/>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>Category:</td>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>{gameDetails.category}</td>
                </tr>
                <tr>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>Release
                        date:
                    </td>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>{gameDetails.releaseDate}</td>
                </tr>
                <tr>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>Number of
                        lines: RTP:
                    </td>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>{gameDetails.numberOfLines}</td>
                </tr>
                <tr>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>RTP:</td>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>{gameDetails.rtp}</td>
                </tr>
                <tr>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>Volatility:</td>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>{gameDetails.volatility}</td>
                </tr>
                <tr>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>Max win:
                    </td>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>{gameDetails.maxWin}</td>
                </tr>
                <tr>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}> Mobile:</td>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>{gameDetails.mobile}</td>
                </tr>
                <tr>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>Game
                        resolution:
                    </td>
                    <td className={'font-roboto-light text-base text-white py-4 border-b border-smalt-blue'}>{gameDetails.gameResolution}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableGame;
