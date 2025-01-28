"use server"

export const sendDiscordMessage = async (message: string) => {
  try {
    // A fetch request to send data through the discord
    // webhook, and display it as a message in your
    // discord channel
    await fetch("https://discord.com/api/webhooks/1333780754119000156/Q-K8NTQ-AzHDfwuQo6Z5NbrAl83vc7oR4pQYTwJ8UB6L4Pyq_HCKyQMGuTQvKcO8u_8M", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    })
  } catch (err: any) {
    // Just in case :)
    console.log(err.message)
  }
}