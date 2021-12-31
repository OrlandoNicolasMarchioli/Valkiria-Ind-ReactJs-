import React from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'
const Maps = () => {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4450968068977!2d-58.47166708494731!3d-34.618190780455755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9f3e4deb7cf%3A0x14ac7e4ed22500cd!2sAv.%20Gaona%203136%2C%20C1416DST%20CABA!5e0!3m2!1ses!2sar!4v1639174622365!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
        </div>
    )
}

export default Maps
