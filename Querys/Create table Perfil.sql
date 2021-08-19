USE [DTIC_HOMOLOGACAO_V1]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PRLA_Perfil](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PERFIL] [varchar](300) NOT NULL,
	[DESCRICAO] [varchar](500) NOT NULL,
	[STATUS] [bit] NOT NULL default 1,
	[USUARIO_CRIACAO] [varchar](200) NOT NULL,
	[DATA_CRIACAO] [datetime] NOT NULL,
	[USUARIO_ALTERACAO] [varchar](200) NULL,
	[DATA_ALTERACAO] [datetime] NULL,
 CONSTRAINT [PK_IDPERFIL] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]
GO