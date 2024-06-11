import SpotifyWebApi from "spotify-web-api-node";
import { Request, Response } from "express";

export const refreshToken = (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken;
  console.log("hi")
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: "4fcf236dbb744e89be617d84a23a2396",
    clientSecret: "089f02cfe7724fdd93f2fe371b875f53",
    refreshToken
  })

  spotifyApi
    .refreshAccessToken()
    .then(
      (data) => {
        console.log(data)
        const accessToken = data.body.access_token
        const expiresIn = data.body.expires_in
      }).catch(error => {
        console.log(error)
        res.sendStatus(400)
      })
}

export const grantCode = (req: Request, res: Response) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: "4fcf236dbb744e89be617d84a23a2396",
    clientSecret: "089f02cfe7724fdd93f2fe371b875f53",
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    })
  })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
}
