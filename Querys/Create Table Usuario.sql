USE [DTIC_HOMOLOGACAO_V1]
GO

/****** Object:  Table [dbo].[UUSUARIO]    Script Date: 17/08/2021 13:26:38 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PRLA_Usuario](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [varchar](200) NOT NULL,
	[Cpf] [varchar](200) NOT NULL,
	[Email] [varchar](200) NOT NULL,
	[Login] [varchar](200) NOT NULL,
	[Senha] [varchar](200) NOT NULL,	
	[Data_Nascimento] [datetime],
	[Status] [bit] NOT NULL Default 1,
	[Data_Criacao][datetime] NOT NULL,
	[Usuario_Criacao] [varchar](200) NOT NULL,
	[Data_Alteracao][datetime] NULL,
	[Usuario_Alteracao] [varchar](200)NULL,
 CONSTRAINT [PRLA_Pk_Usuario] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]
GO