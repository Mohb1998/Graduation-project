import React from "react";

function ContactUs()
{
    return(
        <div class="contactus">

            <p>
                Contact us and let us know how we can improve.
            </p>

            <table class="tableContent">
                <tr>
                <tbody>
                <td>
                        <a class="btn btn-block btn-social btn-twitter">
                        <p class="fa fa-twitter"></p>
                        </a>
                    </td>

                    <td>
                        <a class="btn btn-block btn-social btn-github">
                        <p class="fa fa-github"></p>
                        </a>
                    </td>

                    <td>
                        <a class="btn btn-block btn-social btn-google">
                        <p class="fa fa-google"></p>
                        </a>
                    </td>

                    <td>
                        <a class="btn btn-block btn-social btn-facebook">
                        <p class="fa fa-facebook"></p>
                        </a>
                    </td>
                </tbody>
                </tr>
            </table>       
            
        </div>
    )
}

export default ContactUs;