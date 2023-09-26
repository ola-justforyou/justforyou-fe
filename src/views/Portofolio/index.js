import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './Stunts.css';

const Portofolio = () => {
  const navigate = useNavigate();
  const [stunts, setStunts] = useState([
    {
      id: 1,
      name: 'Adrian',
      url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0mHyUtLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALwBDAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgEHAAj/xAA+EAABAwMCAwUFBgUEAQUAAAABAAIRAwQhEjEFQVEGEyJhcTKBkaGxBxRCwdHwFSNSguFicpLxwhYkNEOy/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACoRAAICAgIBBAIABwEAAAAAAAABAhEDIRIxBBMiMkFRYSNScZGhwfAU/9oADAMBAAIRAxEAPwDz1rVLSiU2IvcorKSF2tR2UkWnRT9C1QtjIxsRZbogtCrmlahMC2HRLczQsRQtsj0UxYnotFStAjizCrmw1hRmRYFTZw49FqGWY6IrLLyU5Mv0kZgcNPREZw49FqPuqnTtQq5MJY0Zf+GnoonhpWsNsFX399RpYc6Xf0jJ9/T3qLk3SDcIJWzPVeGHot39mlDSDqIGcSV5zxTtI6pLKTfUtkmPXkqV1apqGslg6g5HvOVpjhf2zLLLFP2n6mq3VJg8dRjf9z2j6lTpVGO9lzXehB+i/JtxNSSJdG5mTA6gkn6JahWqg6qReHDZ1J7mvEc/CVbgjPyR+vi1DcV+buD/AGp8ToEDvzVAj+XcMDjH+7D/AHyvWuxX2lWt85tJ/wDIrn8DjLHnpTqbE+Rg+qFxaDibUMJUu6U6r9IVTX4sJgKJFq2WWgLsBVLLou5rjqzgeaPgyN77LVzAlq1PoUjVuXASvqF/OCUuSodBfhkLh7gl2Bzk7VbOVyi4BJq+zUpUtIrjZO9yctWtG+6YqVhsFUV6NQuxsrjFLoF5HLstalwyIwgupgjklaVg45KZq0y1sZRNApr6ZU8QoYwq/uii3heXRmFE6hhKZoXR5NSCKSoMap6VpOImTpuTVK6hJ6V2FXEJTaLelehOUrkFZ1NWbjKCUB+PM26ZpaVRHFUBI2xwuXj8LOm7o3fVjjuINCj/ABZvVZmrVMqLSVoUTJLyKZp/4s1MW/EWlZPKU4neaRoBOp24G8f5RLHydEXkF9xrtaM07eHOzqf+FvWOpWC4hduONRM5cSfaMyUSvW0gB3hHRsTtiPP1SNUs9ByBGfitCgoLQieRzex1tyCNLSGjpj6nmpUWnd7vDO5cG/DUYVUak7T+/ojNa4wRI575/wAIXK2KLJ1jRkFri7r4qeDyHkUO7t2idIOdm6hv5iEkLx4xMtOJ+u6nTrTI1Y3h3sg7f2+v0VWQC1g9klzSVAF1MyCQZkOHhMjIOOe2yM9pkapEHcZj3jf1Qq9U7E6sT/kSrUvyEj2rsL9pYuqQtrnw3AB0vwGVhOI6PA5c+XQW9nL6xJOJwF+edcEEHmCI3BHMcwcL2X7NOOm4ZpqOBrUzDsQ4tEQ4/SfJGocXYzlao9MtWgBSrFKivAQ7m5wi/ZXHY1UeC1Zu7cRUEJyndkghVFxc/wA0SkZJGnFGjQ0rk6cpcXJJTlpRDmr6paARhY3yu0bIuC0wNvVJMeavKNIRsq/hVESfVWzsLTDox5XukKXDtKRurxpR+IvkYVIxp1ZVSYUI6Ge7Dson3NvRMU2ABQdVgqg7bPDGMUixSphfOKL7ObWjgpqYpKIcu6yrBOaEzatyl5TFqcqpdB4+y6t9lG7GEW2bhRvW4WRfI6TviUpZlMNoiEs8qTapWs5rexkUAsVVvJe97IaXHcmSG5+BiFqb24IpPM7MdnnssXTa4swANRJ1HkAOadi+y1VAKtMjxF5yDlx+gSr6kmZJPXc/NWtlwXvplziBtpEz5RG/ILedn/s7paB3wJcZkE4A6JWXKohwxOR5o2g+JkR0lM2thXcdLKbnHyjn5r08fZ3TaZa/B2lskf7cx8le8M7O0qAAGepJkn3rK/J/A5eL+TzO27GXVTcBvlP1R3dgrhsQ9p332jovXqVJv72RBSB6JTzzY1YII8Y/9FXQmANtsmR0VFV4XWY7u3NLckiQY+MSv0C8AbAKn43w9j25AnqAMeiOHkSvYMvHjWjw66tyyMFp5nYH3RK0v2W1Xt4jSFMkBx0vnIcwkagem8z1hD7Q8I0ucJLiMmeQ5e+Y+KY+zU91fW7uUnnsXNMD4grpYppxsy1UqP0O+zagVrRsJLiHFC1sqnqcedplC51odHFbsvhZtAVHeWTe8B81HhfGjUlcuLn+a1vUpU2mNhGmaixp+EJiq0Qu2lLwj0XK7cIAXK5C1k4A+9NXFVVjMHfmi3IMK09FuPusYa0EZVZc0/EnrRpjdT+7hR7LTpiTgYmVNjRGVxzgDC41ioOzxJjVFwXQ9cLkSOcz7SvgF2VxpRAE9KYtWZQJTNocoZdDMfyL62ZhDvW4U6BwoXuyyx+R0n8SiqBRAUqhXAti6OVLsFesmm4RONusZhY+pRdAcXSDMDHqCfqtwBO+0GfSFleI6W5zJxvyOQMc4HzhNh8WEjWdkqTWf6nCNTvM8gvQKNeAF5/2Tou0ajPT38/0W3s2zg8lhzJtHQw6irLFlcFDiVOm1oxKN3Q5ZWKjRohyyhtqEHZNFh0wAuCm0e0YnCugdfYlUrmUpeVJCs6rGRuFV3LAQYIMZwrjFtl8kefdpa0VS0/iEcvUfT5qs7FXv/vLcERNZvznHxTHbug5rm1ckOx6EDEfvmlextoH3luQf/sacciDqx/xK6fj/FHOyqsjPdeN0AGFVDbQOZsrPjheaZhVNF7wweiuVWOiyXB7MDVHVQuGxXZ6qPDa75dPVJVqzzcsjaUDGKkj061HhHooXDTCJZewPRfVxhUzMn7ilZSOr3pt+BC+tRn3putTkK1HQ6UtiNCqBKJUdiQlqzCgiuRgqrD42Luc7Wrak0QqxzZKYa5wUQUlZ4colTXIRo5jOhdC6AugKwToTVrulgmrMZQy6GY/kX1tsEO+2RaGwQr04WSPyOm/iUNRfBSqbqK2Lo5UuwjaZIMdD9Fj3W1ao6n3dGo4bEta541DBmBjcFbuy1iNMQTlpGDJifkl+0M27WimwsdVLmANMDvHU3NYSRykg/2oY5ly4Gr/AM7WNTCtv6VtSaA9sgQ1pcBqdG3nukKvF7oAOa4y6fwVY6cm4VP2b4TUpsramRVbU0u5uDQxrhB6HV74CeoWlxVFSXOpx7BAMud0cRkN5YQTS6YSlKSInjN5Tf4p5YbkQfT6LV8A7U6nNZPi5g4Png8lneH8GqNpVPvDxLg0MaHPc2QTqLzUnJkezGyquJ8Kd3ZY32nPpimZOHOqNa0g7j2ikzhFugouUVZ7BxLiwZT1kgdZIAHmVguJ9p3PjQ852efZa3+puoy73ApXtB2CuGWjqpvKtc026nUzq0ua3JDckzHqicQ4cKjzUmWbiD+H8MCDiOeUtRit3YcnJumqKyjcXjz4azS3r45j3NP1KsLU3TDLXtcdzFUzPQhzAPmhXHZqnXqd41+mnDZpgNeTpidNQuBE77Jitwup3xFEyw7NLidA6auY+nomycfqhcYyvYjxXjlGuPu1Vr6dQOktIBIgasESDI2zzCs+yXDGW9ZlQGo8sOoh2ho0uYS3AktdLmzk88Kv412Z8dauXHVRos0xsXw8mfRuj4q87I2gNs3W6XOAceviHhn0bCfLNHHi9vbZMcHOfv8A+2bcccp16b9OCwgOEzE7ZUaVUaEv2F4eHPrNcMaWE+skfqtgeDsiIRYpc4KTJm/hzcV0ZKzeM+qQNQfeW+q1F1wprZjCraHCgaod0KNwZFLRtrM+AeilW2UbXDQFOoliH8iutjn3pyq+Akg4A+9Ec8FEuhzVuxcvyk7s5wnqzQAlDBKBodH8hKLIhcqVcopjZRdRClMia+zwtq6p92uimjOYTpNRqlMIbGIukqEAaU1aDK42iUelQIVSDhpltS2QL3ZfUSV9WaSkKFOzY8uqKZ7VzuyrEWx6KRt1oTRicXZLhtSAPDkT+Z/NJ9pqjnChVPssr0px1JaPqnaILDMSl+LUy+hUpZh0OY6MamHUJ6bLHNccqf0dTG+WD9r/AEWgtSHmq1utr2ta9gIBBbq0vbOCfEQQSMAdII61tTEO012k76KdRxB6HQCPqE7wGsH02k8wJ+CvqNswjLQUOSfupgxx6tGJ76kJIp3FRw21sc0/295A+iFwmzqVrhr6lPuqdM6mtJBc6oQQC6MAAEnfcN2hb6rRYxpMADnACprFjnPB0wCZH5IIyt0kM9P7bNKacsLeRELz2vwi4onTRZTqUh7DXEtewf0SJDgNhtgDfc+k0qRImMbKmvKTw4ua3UBk9POENtdBcYy7MYLWsT4rKnPUl5+JDVeWfD7mPZpURz0tdUcfSS0D3grQ2gY/qDzBRzS0giSeeeXopzbAeOtGN7QWjaVrVyXFzHue5xBc5xbEmABsAAAIAACU4fbBlCg8YLmUvDznQ39Va9om6hpwQSBHKDv8guCyc4B+oeEQxumNPmfNHN3jReNcZ/0RruxdvppPqc3vI/tZgD46lc3FwQhcCt+7t6TDuGyfV3iP1X1/WAC1KThFJGb55GZ/jHFIVdZ8XyleNVw52FXUHaTKiyzo1P006o9N4dchwGU7UdhZjgV1IWgL8KRm32ZsuNKWituJnChTeU+yiCpdwAruQz1IpVRU1XuOEJgdKvHW43S7aQlD7rDWWLXRXBzgUxqcnXURKM2k1GrBllj+Dxetw+GyDlJNCeqX0tiMpIBOnV6OSh61tQ4SV00NJhRtLnSIK7UrajKkq467LXYemwJqnTCQa9Hp1Ulpj4zQ+2kEZlEJEVkRlyhpjVJDbrcKPcBCNwuC4UphWg/3cFcraQ3SZHlBM+nVDFypi7QyxuQcMiiVHZ+qWt0H8LiI95Wvs6nOcLFMxdOA2fB35xn6BaCrcllu943a3ASPIj7huGftLG6qd5I5D5rP3PHH21TW57XMbENAOuD5zB9FlBxOpUqAPdUa3+pocRA6QN/VWrLW2B7x5c7Ak1CG+k8o9ypY+PZFkc+kX1t9pFEh2nvI2ywiSdhB9yJw3jNas4TWptaZ1U9J1Dp4i7OPJVFPgtkQYY8BxBIDxkjIggSOvvRnWVqCHNY8Bv8AS4meeTHvUcV+wlzW9F/e1SxwewggDInJGMjKdF/qZIXmnE7l1N4FJtXR1fOCD7IzOQf+1r+APJtGPM+KSJiYnEpcsfFWXDLbpo5xGXuYJjxjO/mPotDZ0AY1uBA5NET65WccQahcPwgH3yW5+KYpcQI5rVGCcFYuM/ezdffMKi4vdnkVVji56pOvfyicWwrjHoHWBJQ3MXfvCFUuQjoS2X3AXkLVCoYC89tOIaStLYcUmMpUtD4R5o1tq3C7WCVtrsQjCuCmp2jI4yUgmnCA6lCIbgJO4vQpJr7ChGTeg2glFAQLe4BCIa4VplyUro8ODlKUIIjUw5xMORGOQFIKiDAciNelmqYKphpDOtSa5LhykCqGJDOtfakDWvu8UC0H1L7Ugh6mCoWqYrxcgMFQYeyYPkMn809T4ox9J7cGWkHnmOiWuqYe0t6rMsqOpag/BB08sjqOuEGWHJIPHLi/0bDg9m00gIzmSYyT16Jply23PjBLP9TC8D3tBwstwXtH3IAP4nbbn/paO345TrFrWAklwbmMEyZ+AJWdrJF6NOPLFLTDUu0fD5w2jq6BsH3jSnW3oqxobpbHJrhM+ZGPcqx9ekJfokiScAOgeXz9FYHjdFlMOdALhIBwMzH0VScxiz2uxTi1NrWw4b8vJDbxINpBoOwgcsnAx71leLcUNd9R2ojTgDkRv8Rn9hE4dcOqPpsaCS4yf9OmJmdvwn3ovSbSszPMrdGqezRQkiHPc2fQDV9SkHVCrDjHss98+sCVVytKaa0LSa7Jd4VEvK4virJs456EahU3KBChWzjahlXHDq5EKsoU8rQcPtJSshv8NO7Li2vHRunG3LupQbe0hOd0kqMjZkcL6F3XTuqXqVXJt1Jc7hRxbJGUV9AGXLhzUvvjuqK63UO4VcZF3B/R5cHKQclwVNq3nlwsqQchKQVkDNcigpZiYahYcSQKmChhTAQjUce5C1ojwh6USFTeybaiMxyVR6ZUYWN7Pri4axpe4w1okko1zY62Alpa/SDnDhqaCJjnBCxfaviYqEUWnwAjUep/QL2DtZZaKrXgeGpTb/yYA0j4aVM+NwxqX2OxTUp8Po8quLUNeA4mBk7yWwdQgbGJM89PktHwrQ1/eCnBGqoyAdGQ9sEYJjTPq8e6PFLbxSFCre1QBDJgAeGATDtUT0mEqOaMlsqeCSeixuaDKRpkwC4PcZjL9WIk7+MegHuWTu68lznEiKpDBOHBpdJjYeyfmiMr3DnHvGVHAamsbAloME/F0HfGgItHg1RxBe0gANEOOcc8YB/z1V84fkDhPqiroPNR5axsyDqHIzI0k8tJA/5ea3vZvhTWQ78WkNOScdPONp8kpwjgzKfsj3+XOFqbanACzZs1+1GrDg4u2VHaJ0Fno78lSOqwrrtzbuFl96YPFQuKYJ603tc17T5S6mfcFmaVw2o0PbsR8D0WrHB+mpCsuT3NDJrrgrpdfI+Jn9SQx3ykHJVqYaULQ7HNsZtnZWr4TUWRobrT8Kck5Dp+IaNj8Je54i1u6Iw4WD7W13h4APNRbGZJRxxcma7+Kt6olPijTzWFDnd3MnZSsqrgyZV+m/yIXmQ/lN9SvmlSfXysf2ZuXOeZ6rVuAQu0a8bjNKSPLAphfd2ptprSebIhSCmKJUxQKsogxMNUWW5RxRQsOJEBSCm2mpd0oFZENQKrUvecXpU9jqPRv67Kgu+P1HeyA0eWfmtOLxckv0v2KnkRo31Gty4gDzKz/GeOSCyltzd18h5KqDnPJLiT659UF9P9/otcPHhB29v/AAK9RidbIPoV+oLWi29sacRLqbKlM9HFoPwMkFfmZrQvfPsdvjUsGNJzSc6n6AGWj4EJPkx5Jplwk1JNFJf2ZEhwgtJBncEbhLUqH/S9G7TcE75pq0h/MA8TR+MD/wAh89uiwdDBgrgZIvG6Z2sU1kVoJbaQfFhGqUWnIhEdbagj0reAlWM0L2tLKddA3x9EKg2SYVhwOy7+4g5p0oc/oXfgZ+Z8hHNXFOUkkVOSirZPtfY6ODXLSIJpOqOB6yDHrAHwXg3CeIGmdJ9k7+Xmv0H9qlzo4Xcn+prWD+94b9CV+bA1eh8WK48X0cXJJuVm2pPDhIMgomlZGzvX0zLTjmOSv7XjLDAeNPnuJUn40luO0VyX2PAI7QuUGtdlpBHkmm0lkkqezThaOURlaLhjlR06SuOHkJGRHS8SaTNCx+FhO1VT+YFtG1BCxXaAAvUx9jPNaWJgmv8AB7l21d4FEAaY8l2gPDCcclSH+zFQa3eq10rJdmWAPPqtbhZsnZ2vEf8ACR5wVNoXGqYWo88EaphRaQqy+4/SpktEuI3jYH1RRhKTpEboumoVzfU6ftuA8ufwWQvO0NV2AQ0dG9PVVLnuJkkk/vmtcPD/AJ3/AGA9X8GtvO1DRPdtnzdt8FQ3vFqtX2nmOg2+ASJ9yno6LTFQh8ULcm+yByutKLTbtP7JUKxIgxq3xPzBjdRzfYIWm2BHTkoVAfVQ+/NjLXDlt+iJ3rXCWz++ipSTJsUqugx8V6p9hvEodXoE7htRv/5P/ivKqgWt+yi67viVAcqmqmfe0kfNrUme0F1TP0hbrN9qOzWsmvQHj3cz+vzb/q+vrvp2iFCvchuNydh+vRc/JBTVM1Y5uDtHmVG804cIPORGRyPmiOu5wFp+IWVCu8h501NtbBgmMBwO/r81S/wKoLhtuI8TS8VI8OgEAmP6pIEeY5ZXNngknrZ0YZ4SVvQhRLy4UqY1VHmGjp1c7oBuvQ+C8Mbb0hTbk+093N7z7Tj+8AAKs4fw9lEvbQnvGx3j3NJc6RIGsgCPJqubS61YcIcOXI+YWzBh4bfZkz5+bpdGH+3AkcNMc61IH4k/kvASz9+S9w+3u6izoUub64P9rGPn5uavEWgflH6rpYPiYZ9kVNh/cfRdcyBPxQTcN6/DP0WrmVVlhRvHMy10Ecwrew7TEGKokf1Df4KgDpAMbjP6qMdP8KS4z1JWSLcej0Sz4jSqew4E9Nj8FZW1TK8oLiMtOR0Jwrfh3aarTw/xjz3+Kx5PEv4M1YvI4vZ6h32FnOIiXJa07R06gwYP9LsH3dUdtYEyVj9OUHs158yyxSQvUBiFOmCAvq1wJUfvQVmRRHeBvLXElaX76FiPv+nZc/jBS5QtnR8fyVjhxZxqmElaVi5jXHciUeU9qjlAeM3ndUiQcnwt9Tz9yxJfJV12sqnVTbygn37KjZ+RK2YVxhYEtsLpRAznyUaG4R2CccpKdtoW3R3RkeXXyU2txnc+5QPL980SqI+agJw8usKNTln9SpRn3folXu8R8iY+CpssKGz+SI7y2nZfMOD8fkuPO3mqsuhaofqmOC3poVqVbnSqMf8A8XAn5Slqh3UG7/FCyH66N20taWkEvbqb5gjB9Epb0jPiy47qr7EHXw+0qOy77vSz6NA/JaJmQJWF6Y9CjuHMLteQcEgbEjmUW4rBjqRP4nmnPTU0uHxcxo96M13JZn7R/wD4YIJaRcW0OaYcD3zRIPXKF6TYUVbo1qpuNF0fyjDgcEcvP/CsS86Secx80nXHgnzRUCeNfbVxN9Sva0niDToveQNiajomOWKa8+pD4/qtV9q9Qu4k4H8NGkB6ZP1cVlmfktmLURM+wobO8QospgclKPzPzUuf76JiZQM/vouO2XHH6L5p/L6q2UgboP1H+VxuFKohuMKraYSR0YCbtOLVGYBkRscpRzcx+9kJu58oHy/yrctUy1pmo4fxEVRBw4cuRHUJp6zPCKpFVoHOQfgtMsGWKT0Pixd5QyjPChCWEf/Z',
    },
    {
      id: 2,
      name: 'Adrian',
      url: 'data:image/jpeg;base64,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',
    },
    {
      id: 3,
      name: 'Adrian',
      url: 'data:image/jpeg;base64,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',
    },
    {
      id: 4,
      name: 'Adrian',
      url: 'data:image/jpeg;base64,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',
    },
  ]);

  const filledArray = Array(5).fill(5);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth < 768) {
        setDeviceType('mobile');
      } else if (innerWidth >= 768 && innerWidth < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSwipe = (direction, cardId) => {
    if (direction === 'up') {
      // Menghapus kartu yang di-swipe ke kanan dari daftar kartu
      // setStunts((prevCards) => prevCards.filter((card) => card.id !== cardId));
      alert('danger');
    }
  };
  const outOfFrame = (direction, cardId) => {
    // console.log(stunts);
    if (direction === 'up') {
      window.open('https://viding.co/portofolio', '_blank');
      window.location.href = 'https://viding.co/portofolio';
      // alert('Pindah laman undangan portonya ');
    }
    setStunts((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };
  return (
    <div
      className='max-w-screen
        min-h-screen flex flex-col mb-96'
    >
      <Navbar />
      <div className='m-auto'>
        <div className='   container '>
          <section className='relative  h-80 min-w-screen m-auto text-gray-600 flex'>
            <h1 className='max-w-2xl m-auto  text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl pt-32'>
              Pasangan yang Berbahagia Bersama kami
            </h1>
            1
          </section>

          {deviceType === 'mobile' ? (
            <section className='mx-auto mt-24 mb-96  bg-white space-y-4 flex flex-row flex-wrap justify-around md:justify-between gap-x-10 gap-y-11  md:px-6 px-0 '>
              {stunts.map((stunt, key) => (
                <TinderCard
                  className='absolute px-5'
                  // className={`absolute   z-${key} -${key} `}
                  key={key}
                  swipeThreshold={1.5}
                  preventSwipe={['down', 'up']}
                  onCardLeftScreen={(dir) => outOfFrame(dir, stunt.id)}
                  // onSwipe={(dir) => handleSwipe(dir, stunt.id)}
                >
                  <div
                    onClick={() => {
                      console.log('testing');
                    }}
                    className='relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-start overflow-hidden rounded-2xl shadow-lg bg-white bg-clip-border    text-gray-700'
                  >
                    <div
                      className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent ${
                        key == 1
                          ? `bg-[url('https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')]`
                          : `bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]`
                      }  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
                    >
                      <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50'></div>
                    </div>
                    <div className='relative p-6 py-14 px-6 md:px-12 w-[23rem]'>
                      <div className='  absolute left-6  bottom-6'>
                        <div className='mb-2'>
                          <h5 className='text-xl font-semibold tracking-tight text-white  mb-1  '>
                            Abi dan Nui {key}
                          </h5>

                          <span
                            className={`mr-2 ${
                              key == 1
                                ? 'bronze-badge'
                                : key % 2 == 0
                                ? 'gold-badge'
                                : 'silver-badge'
                            }`}
                          >
                            {`   ${
                              key == 1
                                ? 'Bronze'
                                : key % 2 == 0
                                ? 'Gold'
                                : 'Silver'
                            }`}
                          </span>

                          <span className='islamic-badge'>Islamic Theme</span>
                        </div>
                        <h6 className='text-sm font-semibold tracking-tight text-white  mb-1  '>
                          16 April 2022
                        </h6>
                      </div>
                    </div>
                  </div>
                </TinderCard>
              ))}
            </section>
          ) : (
            <section className='relative max-w-screen mt-24 '>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='grid gap-4'>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='grid gap-4'>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='grid gap-4'>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='grid gap-4'>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      className='h-auto max-w-full rounded-lg'
                      src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
